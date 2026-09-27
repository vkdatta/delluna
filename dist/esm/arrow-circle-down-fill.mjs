export const name="arrow-circle-down-fill";
export const id="dl_cd2d68c710824cfd922c";
export const url=new URL("../icons/arrow-circle-down-fill.svg?v=888e909956e911db008c61a44578b4acf435fb78a3227960455295c71fc8f8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
