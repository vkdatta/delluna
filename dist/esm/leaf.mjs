export const name="leaf";
export const id="dl_260482e3c3d842d78098";
export const url=new URL("../icons/leaf.svg?v=c3acfae6e700955113cea350533b1a9a3100ea61b235f00cca53cddf5f7356a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
