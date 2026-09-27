export const name="8k";
export const id="dl_9f98207ab68614a4b683";
export const url=new URL("../icons/8k.svg?v=f366257b837f766efd85067dec9db41ac01f170f9d555e16656d587b2028b6c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
