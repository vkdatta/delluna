export const name="digital_out_of_home";
export const id="dl_a7fb46f190b34c0c8128";
export const url=new URL("../icons/digital_out_of_home.svg?v=ce66cdab58483b860582d03f610bfab2ea7678cfa69b0164c8121ad79590232a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
