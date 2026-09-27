export const name="sim_card_download";
export const id="dl_7d0dcdb993512f504f90";
export const url=new URL("../icons/sim_card_download.svg?v=1c4a068bac2369d8ad50b9548d5904fb10e79391388acf5b43c9f76b407e77f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
