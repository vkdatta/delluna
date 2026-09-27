export const name="lucid_2-corner-right-down";
export const id="dl_fc6e11c02e4d4141adeb";
export const url=new URL("../icons/lucid_2-corner-right-down.svg?v=a3b276506102b89cad7bfad664504ed43d02105ecbcb0cdaabb5e56ca19e446d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
