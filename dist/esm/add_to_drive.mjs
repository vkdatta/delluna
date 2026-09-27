export const name="add_to_drive";
export const id="dl_48787a698528192f926d";
export const url=new URL("../icons/add_to_drive.svg?v=e51cd896cf0159451b9ae4ba1d67158b00fa9ad7c716be1c8a6baaa06bc7943f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
