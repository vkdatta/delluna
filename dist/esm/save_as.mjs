export const name="save_as";
export const id="dl_83777c6086850d91fa7e";
export const url=new URL("../icons/save_as.svg?v=583576739dc908875564720c667ab4a52bbf46931bb6e28aefa887c9764b5cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
