export const name="cast_pause";
export const id="dl_d20766ecfcdfe0415d3c";
export const url=new URL("../icons/cast_pause.svg?v=38a06a11bf8f9db7d7c2272a83948095f60dfa3a9aaf0d474996d0a55b614876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
