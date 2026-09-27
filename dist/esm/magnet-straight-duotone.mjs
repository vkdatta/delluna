export const name="magnet-straight-duotone";
export const id="dl_ef0d2b5ff78a45249b13";
export const url=new URL("../icons/magnet-straight-duotone.svg?v=cb0c92d5d4a2e439bb7b8ea918be6835a145033bd10a06b482aba58a133d9557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
