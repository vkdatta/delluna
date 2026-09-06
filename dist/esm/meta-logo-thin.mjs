export const name="meta-logo-thin";
export const id="dl_75e5d9425b0e4bbbbce4";
export const url=new URL("../icons/meta-logo-thin.svg?v=2129cd93571a909e28f5c734c6face32f860b6d46cc269e8d35ca271cc284e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
