export const name="add_to_drive";
export const id="dl_e662a127873e4684a988";
export const url=new URL("../icons/A/add_to_drive.svg?v=c1d02b136f3dcfb4b92c542efcc4fdf54a4a45ecf85a5b7143ece1acf79ffc11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
