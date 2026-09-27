export const name="lucid_3-printer-x";
export const id="dl_c44dc97948a94c7e82eb";
export const url=new URL("../icons/lucid_3-printer-x.svg?v=ca6615475d9a537354ec3e9a8d83e04bf7be36bd34fdd02b5048950d310f1304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
