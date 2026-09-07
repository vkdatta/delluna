export const name="speaker-none-thin";
export const id="dl_e57fe1be1d5a4ff687ff";
export const url=new URL("../icons/S/speaker-none-thin.svg?v=a40ad06b9cf1a59e3efda56c2a3ba28547bcaf08c1f7bc32120abec6c664998e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
