export const name="delete";
export const id="dl_83faed7c2a2dd5397b25";
export const url=new URL("../icons/delete.svg?v=9c465f0f8e3855b1c7ae8c2053382aa52f288b368f207dda79fcda72fcb4c794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
