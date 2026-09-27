export const name="cleaning_services-fill";
export const id="dl_f208c9b67059df49a9fd";
export const url=new URL("../icons/cleaning_services-fill.svg?v=db5440ba6086295749431c3001d5733473b7ec52ef15ef8b3e1781debb9896b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
