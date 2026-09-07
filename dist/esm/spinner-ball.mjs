export const name="spinner-ball";
export const id="dl_d2a0a7c69dfa482a9dd2";
export const url=new URL("../icons/S/spinner-ball.svg?v=0e0fffa5f18cfd65d801740e6867a98a50ae362d561ee9ea65abe4acd282ff17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
