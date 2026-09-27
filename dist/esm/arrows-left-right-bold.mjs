export const name="arrows-left-right-bold";
export const id="dl_244de3c1526a4caf9229";
export const url=new URL("../icons/arrows-left-right-bold.svg?v=295c65090e99cfa29a922bc42e35db151176aabe9084bbf300fd9de0a4e430e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
