export const name="not_listed_location";
export const id="dl_bf3423c8f37044c4bdf3";
export const url=new URL("../icons/N/not_listed_location.svg?v=4aab4b1808bde6d3595c70411c6f4eecfedae61cb4e3d060fab791defa01adfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
