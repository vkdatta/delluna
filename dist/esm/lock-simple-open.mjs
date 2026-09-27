export const name="lock-simple-open";
export const id="dl_4f1c9c9da0d042638806";
export const url=new URL("../icons/lock-simple-open.svg?v=8b2f1fa328bbe07850ab283d0383e52f52f0a1a545d9d41bb3854d61a024e684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
