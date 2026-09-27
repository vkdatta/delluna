export const name="traffic-fill";
export const id="dl_d92455557e50a4960f34";
export const url=new URL("../icons/traffic-fill.svg?v=c4a9d708fb857bae9fe96a54619b1bef44ddc4a41a5785f4dfd87df2d7524b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
