export const name="join-fill";
export const id="dl_140090df1382d670c226";
export const url=new URL("../icons/join-fill.svg?v=e16fb3d95d52b1e542f0c75dbab7a8fdf6688a46b912b5d560442db2635e5ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
