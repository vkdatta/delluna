export const name="nordic_walking";
export const id="dl_7a3c4b8a2ca4ff41631c";
export const url=new URL("../icons/nordic_walking.svg?v=f098e90ff7c5505b69e83ce1623655e6cdfeb2b8c5cfb27fbcf88aad0a1fe9f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
