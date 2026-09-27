export const name="exclude";
export const id="dl_7ecfda7192c549a6b064";
export const url=new URL("../icons/exclude.svg?v=84da66fe4255ddb7d0787d3e4bc850ec8a000d9171827aac512f94804f50f63c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
