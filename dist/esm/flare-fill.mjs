export const name="flare-fill";
export const id="dl_b99afe1fa9944ccbbc5e";
export const url=new URL("../icons/F/flare-fill.svg?v=e7a60641c38719e8e4689537e599e5c9e50bc88dedadb31de54dd4053835e39c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
