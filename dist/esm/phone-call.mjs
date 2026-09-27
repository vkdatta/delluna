export const name="phone-call";
export const id="dl_b211bc0ec7ea49ed991e";
export const url=new URL("../icons/phone-call.svg?v=0200590b55c8b0c39df3ec6b0c7af9e0d5ac80f9e3eb8bd12920530d295be0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
