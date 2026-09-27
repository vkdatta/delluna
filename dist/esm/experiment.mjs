export const name="experiment";
export const id="dl_69f958a2ac52be039633";
export const url=new URL("../icons/experiment.svg?v=34e14208a1a303cc141f7c97c0385d20cd1af7cee7d31e9717e8664f1adddec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
