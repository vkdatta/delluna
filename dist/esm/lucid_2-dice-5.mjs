export const name="lucid_2-dice-5";
export const id="dl_6324d3606f534fbea30c";
export const url=new URL("../icons/lucid_2-dice-5.svg?v=b8b6e6dc66064ea8a50e6f58000913964b565cab96de45b459d1aa81afadf246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
