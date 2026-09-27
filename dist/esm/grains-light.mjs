export const name="grains-light";
export const id="dl_2b37f930053d467b8e60";
export const url=new URL("../icons/grains-light.svg?v=157fa66d570c0c352780b4a6dc05c38340a572357fc29f329102bcbbf4c6dc59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
