export const name="snail-fill";
export const id="dl_8c3122fb1db1e036ff1b";
export const url=new URL("../icons/snail-fill.svg?v=1e75b5c4f2ec0c5d4df89d97f6248cc4f0558a903313670a2ed1ef50d4351281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
