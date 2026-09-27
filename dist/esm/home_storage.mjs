export const name="home_storage";
export const id="dl_c4818d1e3442c065be78";
export const url=new URL("../icons/home_storage.svg?v=ddb7a10a6fc18d5bfaba440de194bcc4d1d6b61520448b9ff959b015930c204f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
