export const name="radical-thin";
export const id="dl_3d9c1d7bcf994136b3dd";
export const url=new URL("../icons/radical-thin.svg?v=38fb4544f7ace20d70fec0dfbcdb5d2fd9ce1b78da754ad2be0d2297347ae53a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
