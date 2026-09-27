export const name="text-h-five-light";
export const id="dl_84f1d2d9807ff73e24f7";
export const url=new URL("../icons/text-h-five-light.svg?v=3aeb46419e62020049e33f269ec535f4e4be48a8044fd29ee58d8dc1499aeca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
