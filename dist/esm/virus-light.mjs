export const name="virus-light";
export const id="dl_c6d1facb2c41a2563c65";
export const url=new URL("../icons/virus-light.svg?v=df3b2de3e645f40a3f12eda79e25121350c1408e2061992c7fdbc2aafcc0ae54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
