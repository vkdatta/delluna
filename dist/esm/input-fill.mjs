export const name="input-fill";
export const id="dl_c67f1e48ddb5411887d5";
export const url=new URL("../icons/input-fill.svg?v=e40ef8719c811181411b74b2136978dbaa14139b79cb25c0e9db8075c6f3775d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
