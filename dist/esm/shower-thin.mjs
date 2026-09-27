export const name="shower-thin";
export const id="dl_c729d2ef90f3b68cfd9f";
export const url=new URL("../icons/shower-thin.svg?v=15509bde81a1f0db061ad59655d58ddd06d5831f940f4d7190d843af38fc90c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
