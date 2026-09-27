export const name="password";
export const id="dl_b7460c5360014fc29f01";
export const url=new URL("../icons/password.svg?v=87b9db5f471a8d1a627a0ea996bc396cdf80f7dd1e2cb27a4b40b1313bfdb607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
