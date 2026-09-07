export const name="trash-simple-thin";
export const id="dl_8c0a7651b1eb4586ba19";
export const url=new URL("../icons/T/trash-simple-thin.svg?v=4a01a0ca741a3d2a1e0ba276d14b37ad57a7498b0c328895af8ddeb35b9e9f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
