export const name="directions_run";
export const id="dl_97f492013830bda1ea90";
export const url=new URL("../icons/directions_run.svg?v=085116cbb5133ebaa32d5ade185b8afcb87cf8b9ad81756bbe783ea97ec0d2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
