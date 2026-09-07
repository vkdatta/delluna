export const name="text-strikethrough-thin";
export const id="dl_c57bf5c97b544067be44";
export const url=new URL("../icons/T/text-strikethrough-thin.svg?v=b32703e8e7f3245ad24af86787a518d9f526bf85534bde30b759bd9fa78e39ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
