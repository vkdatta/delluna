export const name="styler-fill";
export const id="dl_880d9d3f08252f745987";
export const url=new URL("../icons/styler-fill.svg?v=42af4eefb17939c8447387e4cfbe9a1f12346422e9f00a0109d9d0203ff06e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
