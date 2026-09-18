export const name="living";
export const id="dl_9cda8437d0cd415aa755";
export const url=new URL("../icons/L/living.svg?v=dc6c9a64718bbdc8f082b75b5a9367803dc847a4d5842c377b6b890c1ef2e9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
