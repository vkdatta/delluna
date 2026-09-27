export const name="coin-vertical-thin";
export const id="dl_eda796eafde0403db215";
export const url=new URL("../icons/coin-vertical-thin.svg?v=c6adf821420391ebdc68473acb5b7a18a2a4311d5c08b132c2f9a165f1d7707c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
