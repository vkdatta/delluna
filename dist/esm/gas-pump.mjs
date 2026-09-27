export const name="gas-pump";
export const id="dl_b9fa1ae683da4a0ba4c6";
export const url=new URL("../icons/gas-pump.svg?v=80a9751c8764f06f78b7e82c49b6b9764af29f2dcf3338881d3644e0e8220846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
