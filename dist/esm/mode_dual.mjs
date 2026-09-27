export const name="mode_dual";
export const id="dl_03fcc86e59814a983c25";
export const url=new URL("../icons/mode_dual.svg?v=13ae0fd79e52605b4d0ef3de2a8a88d7287781b21a388f882f570bef23c09ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
