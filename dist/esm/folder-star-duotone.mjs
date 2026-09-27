export const name="folder-star-duotone";
export const id="dl_859c8fc5925f4bb997d8";
export const url=new URL("../icons/folder-star-duotone.svg?v=71dbc85d91f70c5941349f1fc7b0c9e357a764748e49a54c1203d50c0442f2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
