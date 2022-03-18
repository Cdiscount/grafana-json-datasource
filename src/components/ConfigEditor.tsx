import {} from '@emotion/core';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { TextArea } from '@grafana/ui';
import React, { ChangeEvent } from 'react';
import { JsonApiDataSourceOptions } from '../types';

type Props = DataSourcePluginOptionsEditorProps<JsonApiDataSourceOptions>;

/**
 * ConfigEditor lets the user configure connection details like the URL or
 * authentication.
 */
export const ConfigEditor: React.FC<Props> = ({ options, onOptionsChange }) => {
  const onParamsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onOptionsChange({
      ...options,
      jsonData: {
        ...options.jsonData,
        data: e.currentTarget.value,
      },
    });
  };

  return (
    <>
      <h3 className="page-heading">RAW Json</h3>
      <TextArea onChange={onParamsChange} value={options.jsonData.data} spellCheck={false} rows={20}></TextArea>
    </>
  );
};
