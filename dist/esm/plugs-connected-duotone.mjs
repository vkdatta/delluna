export const name="plugs-connected-duotone";
export const id="dl_b30be1f098af49729382";
export const url=new URL("../icons/plugs-connected-duotone.svg?v=cc8f6a51404fd4e8d798064c6d38a2954211b27dd7389d73f6dd54a9d5f165a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
