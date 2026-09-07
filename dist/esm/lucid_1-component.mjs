export const name="lucid_1-component";
export const id="dl_05cd6b370bb24edc8ba3";
export const url=new URL("../icons/lucid_1-component.svg?v=b2f9e044cf1c1a748b0c4dbe84c57a02f51da4783ce4be8eb245da75d44e785f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
