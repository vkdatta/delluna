export const name="plugs";
export const id="dl_2403fe24f1a54e9cb22f";
export const url=new URL("../icons/plugs.svg?v=7291601e5a63d8858aa70a697ac0a3e8f7940981f54b84f031feb05b4b9dc8d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
