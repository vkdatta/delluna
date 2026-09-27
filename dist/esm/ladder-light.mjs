export const name="ladder-light";
export const id="dl_9d980fb15b8f4e09ad93";
export const url=new URL("../icons/ladder-light.svg?v=8c04420636315a5ec433ded48cd3e5bed4285198d7f29e818a7917ca22b2dc63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
