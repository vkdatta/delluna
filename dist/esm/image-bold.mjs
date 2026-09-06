export const name="image-bold";
export const id="dl_2d360984e8ef42489e17";
export const url=new URL("../icons/image-bold.svg?v=d99ef65cc79a3db6a0b213c878238e06689ef701285f207629b49868808b852e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
