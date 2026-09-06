export const name="arrows-horizontal-light";
export const id="dl_035564bcbd354615a8ba";
export const url=new URL("../icons/arrows-horizontal-light.svg?v=08f02c7e4bf3dc7b8bdd96c7f065ffb2efd78c3b0611abb539aa5340b3d2721e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
