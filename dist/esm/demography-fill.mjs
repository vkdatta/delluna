export const name="demography-fill";
export const id="dl_3f034d652791414ebffb";
export const url=new URL("../icons/demography-fill.svg?v=17fcbfbf745182d63c85e96ca1b1c8708c7272c4de963f51935db58fc791e9bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
