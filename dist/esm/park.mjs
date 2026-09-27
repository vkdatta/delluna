export const name="park";
export const id="dl_70d49a6fbd6b4461a13c";
export const url=new URL("../icons/park.svg?v=1c86e7e3e39ed424cea82b6ac1d32d4b017543692a1bf8f124f8c698020cb5cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
