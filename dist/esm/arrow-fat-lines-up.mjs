export const name="arrow-fat-lines-up";
export const id="dl_9c0b9e0331f14bb2a2bb";
export const url=new URL("../icons/arrow-fat-lines-up.svg?v=d4704881e7dc3acb7a2800f48e97f342e07e0fd03ed85f653837b60042015532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
