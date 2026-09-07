export const name="lightning-bold";
export const id="dl_074a2928b148497d8351";
export const url=new URL("../icons/lightning-bold.svg?v=8b9fe64519b0b2e3dfccefa18d0c76d4a8a8aa3e93ae00437705aaed084c0e3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
