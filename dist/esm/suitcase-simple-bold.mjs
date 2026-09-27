export const name="suitcase-simple-bold";
export const id="dl_3ef356dbe2c757025c91";
export const url=new URL("../icons/suitcase-simple-bold.svg?v=e4fecfd0d4baabd04bb96ee1fb4626900b9ebf7b6706e000c8f44cbe987e208d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
