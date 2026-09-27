export const name="file-cloud";
export const id="dl_379b64b0a3c845c189e6";
export const url=new URL("../icons/file-cloud.svg?v=6fa96790d123f32261cef50013d43b77167621297b898d0225cfb0ba794a2c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
