export const name="lucid_2-file-type-corner";
export const id="dl_a8df6f0219fe4f6f85c6";
export const url=new URL("../icons/lucid_2-file-type-corner.svg?v=e7af0fe9c7ac78c2530488abf5bfe6c038b7ebe075792b289ee6a1f3f86909f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
