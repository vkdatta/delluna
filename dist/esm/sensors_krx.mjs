export const name="sensors_krx";
export const id="dl_d1a6ff4bef8399aa4e44";
export const url=new URL("../icons/sensors_krx.svg?v=33a5483312042f00cb57b141086c2f16063437e025225de5243cd3b7ed208e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
