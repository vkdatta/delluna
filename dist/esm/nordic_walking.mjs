export const name="nordic_walking";
export const id="dl_734b815a0ed9cb06f3f4";
export const url=new URL("../icons/nordic_walking.svg?v=83e5b686fc31db652b938c2cebf37a03d15723b08c8390abacd4d284e52bcd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
