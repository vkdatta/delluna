export const name="shield-warning-thin";
export const id="dl_bac6a84d5d6dd2a95e2a";
export const url=new URL("../icons/shield-warning-thin.svg?v=eab89002fae2954db2b2d53b9f0cd4b1640ab5a4de9a8f6caa2dd198a72af3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
