export const name="agriculture";
export const id="dl_95fce307ebc940908690";
export const url=new URL("../icons/agriculture.svg?v=b11974d7fcad6e388c9d590233bd600a5c831ab18b42e626fbe24aa08edab01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
