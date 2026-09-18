export const name="block";
export const id="dl_bfb2916d18624aa480a7";
export const url=new URL("../icons/block.svg?v=479a70726ddfb63d28d8dd706d6a1451836ef55b53b7509146a089f8e785d7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
