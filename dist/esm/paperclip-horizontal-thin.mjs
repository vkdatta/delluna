export const name="paperclip-horizontal-thin";
export const id="dl_17f571a7fbe84db0b49d";
export const url=new URL("../icons/paperclip-horizontal-thin.svg?v=f2354328bd2c42372c32ce0c29b654a4f908ac5957a1a37f6944dd9d704336b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
