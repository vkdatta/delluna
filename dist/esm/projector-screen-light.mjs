export const name="projector-screen-light";
export const id="dl_9a413a38645349a689f1";
export const url=new URL("../icons/projector-screen-light.svg?v=5f91277ab48cd2b53fb4fe98bb5267ef0d7fffeee3eb9efc2d55f944429eb80c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
