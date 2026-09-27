export const name="trademark-thin";
export const id="dl_67a1e8320f8661e081f2";
export const url=new URL("../icons/trademark-thin.svg?v=a817dab3c719b3c995c5185ac6306042fd52b9400aef4119de7a4802a05389ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
