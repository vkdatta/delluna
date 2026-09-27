export const name="anchor";
export const id="dl_d95a1219c90443918da6";
export const url=new URL("../icons/anchor.svg?v=b892f2d2d9f92b7a1cdca8e1ee6964b0c4ea88fb4d8f7e1380dc7e51f70c9573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
