export const name="onigiri-bold";
export const id="dl_02dd412fad9d4512ba67";
export const url=new URL("../icons/onigiri-bold.svg?v=0893821d68349e50ded4c09857c71a187fa9141def5e140a5f4ef3c230b956fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
