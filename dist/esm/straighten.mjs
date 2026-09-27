export const name="straighten";
export const id="dl_e66bdba5447f3bc4f735";
export const url=new URL("../icons/straighten.svg?v=cafa85ad960ed2a0621d8001eda553b48d9db7696b1e6391fe36558c636e7152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
