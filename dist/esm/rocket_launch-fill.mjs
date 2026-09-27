export const name="rocket_launch-fill";
export const id="dl_b5b2768fb98d6a5e9213";
export const url=new URL("../icons/rocket_launch-fill.svg?v=37b9ecbbc93ef28bdc01ae4e88f8a85067e807dfcfb98d92e4257137f03596bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
