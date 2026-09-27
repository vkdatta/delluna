export const name="knife-light";
export const id="dl_56fbbd22139e4a078724";
export const url=new URL("../icons/knife-light.svg?v=37045a8c1f8cabb6947840991efa5682c7de623a78250efed06907ecbadcc4cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
