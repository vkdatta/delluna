export const name="warning-circle-bold";
export const id="dl_fadb11d7ae0b4f82b1b9";
export const url=new URL("../icons/W/warning-circle-bold.svg?v=82a1a5cad112a89581d11f44affb41433a1a8b804a9d77556a5c2b97b23784aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
