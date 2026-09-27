export const name="corporate_fare";
export const id="dl_e688fb0a33ae0d774680";
export const url=new URL("../icons/corporate_fare.svg?v=30d9074e8cb50d67252432c00e944b491ed541941986a51725e003414bbfde90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
