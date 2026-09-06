export const name="lucid_1-clipboard-list";
export const id="dl_3483ea703e9e4a569830";
export const url=new URL("../icons/lucid_1-clipboard-list.svg?v=d6a33c7c4b96456432453ec85e72d3e8795f50b422c0b737ecef246f13bd3ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
