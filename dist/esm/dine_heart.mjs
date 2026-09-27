export const name="dine_heart";
export const id="dl_8bfc151cff1df90a5c4d";
export const url=new URL("../icons/dine_heart.svg?v=9c04462dc7d19f0921d9e26fe584ad8be4814a31f77ac469ad7cd0ffd34efb6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
