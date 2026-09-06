export const name="person-simple-hike-bold";
export const id="dl_9e5cfe398074441ebeeb";
export const url=new URL("../icons/person-simple-hike-bold.svg?v=e7ee91fc97c5fbb7ebd3c267505956593380887f865dcfb7db984dbf8c6f16bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
