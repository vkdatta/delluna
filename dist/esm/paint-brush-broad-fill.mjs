export const name="paint-brush-broad-fill";
export const id="dl_0542f182a1174f2fae0c";
export const url=new URL("../icons/paint-brush-broad-fill.svg?v=76720464db93657b9f93c0d35c7416599d3ac58e5d9ed9db7c99a16232de64b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
