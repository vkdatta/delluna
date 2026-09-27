export const name="arrow-u-left-down-light";
export const id="dl_c51b41f6dbf24809b022";
export const url=new URL("../icons/arrow-u-left-down-light.svg?v=62b40f85ee0df1d35e6c715c87c6516e99171eb361bc203c0ab0f75b4a765b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
