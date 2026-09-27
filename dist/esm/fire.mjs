export const name="fire";
export const id="dl_2e5924bb77b845c9a6d7";
export const url=new URL("../icons/fire.svg?v=e01defa18705524740d3bf1941ce4a6d87d90000f675a8715bcdfc0852e9c97e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
