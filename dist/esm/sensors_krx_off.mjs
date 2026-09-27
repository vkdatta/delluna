export const name="sensors_krx_off";
export const id="dl_3af0342c822b504abb8d";
export const url=new URL("../icons/sensors_krx_off.svg?v=e16f745f2f0e67670d3de8c833146350e587dcccbc37d3cd8f4494a668fafce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
