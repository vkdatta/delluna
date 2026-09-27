export const name="add_card-fill";
export const id="dl_5064960e2b06c9d0641d";
export const url=new URL("../icons/add_card-fill.svg?v=0a4e2d56a294d7f1d72ef9e2a9934b332deb8151ab4112e4cfd121dceafb6f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
