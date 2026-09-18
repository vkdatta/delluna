export const name="loyalty";
export const id="dl_485ecbd20b474529b110";
export const url=new URL("../icons/L/loyalty.svg?v=c98036d2baa0ba13ca684dd439d075f243b06ff024f3b5d572a04c11cd92cf78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
