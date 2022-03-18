import { TimeRange } from '@grafana/data';
import { InlineField, InlineFieldRow, RadioButtonGroup } from '@grafana/ui';
import { JsonDataSource } from 'datasource';
import React, { useState } from 'react';
import { JsonApiQuery } from '../types';

interface Props {
  onChange: (query: JsonApiQuery) => void;
  onRunQuery: () => void;
  editorContext: string;
  query: JsonApiQuery;
  limitFields?: number;
  datasource: JsonDataSource;
  range?: TimeRange;

  fieldsTab: React.ReactNode;
  experimentalTab: React.ReactNode;
}

export const TabbedQueryEditor = ({ fieldsTab }: Props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    {
      title: 'Fields',
      content: fieldsTab,
    },
  ];

  return (
    <>
      <InlineFieldRow>
        <InlineField>
          <RadioButtonGroup
            onChange={(e) => setTabIndex(e ?? 0)}
            value={tabIndex}
            options={tabs.map((tab, idx) => ({ label: tab.title, value: idx }))}
          />
        </InlineField>
      </InlineFieldRow>
      {tabs[tabIndex].content}
    </>
  );
};
