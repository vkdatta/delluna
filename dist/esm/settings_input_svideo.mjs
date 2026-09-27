export const name="settings_input_svideo";
export const id="dl_00bb24347c095319785a";
export const url=new URL("../icons/settings_input_svideo.svg?v=eb88859871b084af8e9f5093dce5a7a4107f05386f03df2899717b856bbf642b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
