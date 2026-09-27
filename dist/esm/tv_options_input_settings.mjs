export const name="tv_options_input_settings";
export const id="dl_b1f5482f2db4d1a3786a";
export const url=new URL("../icons/tv_options_input_settings.svg?v=b77c34b990ede6b82a679c8c98c77986c425cd8e8e97d6735a5f85732d319459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
