export const name="stop-circle-bold";
export const id="dl_2e6bffdf5d6c4e2fab53";
export const url=new URL("../icons/S/stop-circle-bold.svg?v=371b18cbe91ebe15d8ea24e031c11335d68f49eeb9debe6626e40c11e2b30507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
