export const name="lucid_3-scan-text";
export const id="dl_ac67c393baad4d29866f";
export const url=new URL("../icons/lucid_3-scan-text.svg?v=87622f2970655411526fbea4e79d1384b449ca29f236c38d0f0a193d3dac310f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
