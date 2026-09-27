export const name="pencil-fill";
export const id="dl_f1ce9b80084b4a208d2b";
export const url=new URL("../icons/pencil-fill.svg?v=a108f9d2d86745e9b5e992fa6a3bc28f0c58090133d75fa14dfa835169f8d974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
