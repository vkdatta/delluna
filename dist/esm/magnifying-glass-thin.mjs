export const name="magnifying-glass-thin";
export const id="dl_0de58e36749d49998022";
export const url=new URL("../icons/magnifying-glass-thin.svg?v=9d49c60afbe36e8e31846028ea8f369357af1f28d3f01f7c801d5569e4cc74c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
