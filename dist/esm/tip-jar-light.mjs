export const name="tip-jar-light";
export const id="dl_70c485de90f15f48627d";
export const url=new URL("../icons/tip-jar-light.svg?v=84f00c4b6ce5efa4d1cde97321d7d65c69ceceb8749132cd7117fd1901325982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
