export const name="phone-pause";
export const id="dl_e896320415fe4f36ab7a";
export const url=new URL("../icons/phone-pause.svg?v=28b5aaa98ad7b9f0518f5d4d4abdd0d703c3cf52f87eff597af0d7dada6cfc9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
