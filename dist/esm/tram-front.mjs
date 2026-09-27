export const name="tram-front";
export const id="dl_786b1bb617a04861b0ea";
export const url=new URL("../icons/tram-front.svg?v=e366139809ee3519b5f5a010bad3a84163acde8b5314e9e7a40dced662eb423c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
