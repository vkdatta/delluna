export const name="caret-down-fill";
export const id="dl_7fe8ded8ab014fe18c1b";
export const url=new URL("../icons/caret-down-fill.svg?v=3be8b23c61932a6b64339fbb517f9b26548c0a4654cc48c3e35ec7f0c57f7fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
