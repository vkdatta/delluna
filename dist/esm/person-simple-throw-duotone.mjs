export const name="person-simple-throw-duotone";
export const id="dl_e585108ec6f94aa0a6d4";
export const url=new URL("../icons/person-simple-throw-duotone.svg?v=a6c428c8725e124ca2bb6801232765b471204d966458c3ae27ce16f9146483cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
