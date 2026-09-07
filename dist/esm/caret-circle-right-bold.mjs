export const name="caret-circle-right-bold";
export const id="dl_28a2b55e8e82445a9313";
export const url=new URL("../icons/caret-circle-right-bold.svg?v=f164758b69bf82324e0d6f2b777a6646a44cfc7d4877b5511ffb4e413c62d7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
