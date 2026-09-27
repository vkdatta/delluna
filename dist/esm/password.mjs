export const name="password";
export const id="dl_b7460c5360014fc29f01";
export const url=new URL("../icons/password.svg?v=b2da0d0f8fc9ba07637319e300fe185e54e2f11b4f44781acb72a1d208ed7453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
