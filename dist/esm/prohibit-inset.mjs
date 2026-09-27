export const name="prohibit-inset";
export const id="dl_e1dbaab0fadd49649d86";
export const url=new URL("../icons/prohibit-inset.svg?v=a9f5e13e8da08334d3d184dbde2677bc4593ded2cf776472c8290f3ce6892d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
