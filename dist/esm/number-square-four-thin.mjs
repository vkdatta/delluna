export const name="number-square-four-thin";
export const id="dl_ebefd27194b047c19418";
export const url=new URL("../icons/number-square-four-thin.svg?v=ecfcd4dbb74e319f7733ce98b041de8067a00c535699130fceb0750c0ff65721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
