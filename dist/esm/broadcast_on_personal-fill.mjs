export const name="broadcast_on_personal-fill";
export const id="dl_ee5dd2d7a2f74fd72287";
export const url=new URL("../icons/broadcast_on_personal-fill.svg?v=d15f1b42e3b84292d5c825347dc87e19cdea7712ac54cdae47ce0ad8ede4325c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
