export const name="cloud-fog-bold";
export const id="dl_4b22c831ee8e46919cf8";
export const url=new URL("../icons/cloud-fog-bold.svg?v=950f8b035058b1479558de1e46544cdc93fdaad88d5605f9fb5959f324472fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
