export const name="square-thin";
export const id="dl_e88e7afc10464452af6d";
export const url=new URL("../icons/S/square-thin.svg?v=dacf0ec638835b1874b61ece1487c8fa83322a7e8b154f5eccc97a91058e3580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
