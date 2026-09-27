export const name="meteor-thin";
export const id="dl_a6c18ce80aa24823a414";
export const url=new URL("../icons/meteor-thin.svg?v=22936620bb44bc0b1ca6c84429421a804142887f2f79c8612eea1ad563627bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
