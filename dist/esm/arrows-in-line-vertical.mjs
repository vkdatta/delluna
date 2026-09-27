export const name="arrows-in-line-vertical";
export const id="dl_16fad510bfe043be8d41";
export const url=new URL("../icons/arrows-in-line-vertical.svg?v=1cb8c83cc381051eb2e30c691252117860e214ab21e1eb2739944588c9b3b1e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
