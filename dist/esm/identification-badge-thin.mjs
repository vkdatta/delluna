export const name="identification-badge-thin";
export const id="dl_b0ce5a9e2ed54d63908f";
export const url=new URL("../icons/identification-badge-thin.svg?v=3c32a7df262fceb404e16d9db404e3dd34020abf026c6aaa858a92e8b9a3f23c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
