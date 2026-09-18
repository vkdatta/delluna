export const name="garage_home-fill";
export const id="dl_b4bfd81128884393b6d9";
export const url=new URL("../icons/G/garage_home-fill.svg?v=331d9d33099e48b87870bcb7014878377bc81fef23c744206cc4c3f13e5b0479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
