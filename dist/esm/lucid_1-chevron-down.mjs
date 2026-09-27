export const name="lucid_1-chevron-down";
export const id="dl_f924df015f37487cadaa";
export const url=new URL("../icons/lucid_1-chevron-down.svg?v=da0896fb579f84d39ae475fe850fd66e81d81bffaeaa8eb761d9a5295369e72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
