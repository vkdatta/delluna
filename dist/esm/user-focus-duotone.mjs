export const name="user-focus-duotone";
export const id="dl_2ed2a2c09e67d8a9bd49";
export const url=new URL("../icons/user-focus-duotone.svg?v=cadabc0928766d4daf986291bffdb5b90dd6599e9e53914acd1857511386de62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
