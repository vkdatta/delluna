export const name="heat_pump";
export const id="dl_075d479c815d41e52167";
export const url=new URL("../icons/heat_pump.svg?v=498774467fbdbdcabf33a06024e8ed045fdabec42f618cf04354bcf286243e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
