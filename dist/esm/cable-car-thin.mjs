export const name="cable-car-thin";
export const id="dl_4ea483096cc34173aa19";
export const url=new URL("../icons/cable-car-thin.svg?v=f20c1449750402970166f0893e2ed11f0cae23e3f4b0965bf739b9b2b56a3629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
