export const name="add_circle-fill";
export const id="dl_c84596087baa5e4426aa";
export const url=new URL("../icons/add_circle-fill.svg?v=4d7b272bc49c8ae9bf997133e5703e7cce94aba945a1a5055da18fe2e44ba694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
