export const name="capture-fill";
export const id="dl_5ede538840b448e2b533";
export const url=new URL("../icons/capture-fill.svg?v=ff1c9f37d144a57dd46927097591cef46f4baad1139ac3ed9c44c5edb6e8fc21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
