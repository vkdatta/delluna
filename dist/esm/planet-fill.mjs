export const name="planet-fill";
export const id="dl_68a08f75795536562c30";
export const url=new URL("../icons/planet-fill.svg?v=fd49c9a6d85cff08a0bcee57ac6790976ca348050120d776ae860cbcc10fcb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
