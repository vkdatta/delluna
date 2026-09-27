export const name="arrow-square-out-thin";
export const id="dl_03ea858e8669403db58f";
export const url=new URL("../icons/arrow-square-out-thin.svg?v=9707372d3fddbd5d0e9c22453fb103c459cc179ee9a5320e8c327eb479cd6710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
