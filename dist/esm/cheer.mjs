export const name="cheer";
export const id="dl_25908670b383b72bb7e3";
export const url=new URL("../icons/cheer.svg?v=0676fa064668a9e27916bd7c687f10f9599da17ea8c2b2083a3e6181163b2b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
