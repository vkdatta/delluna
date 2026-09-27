export const name="sentiment_very_satisfied";
export const id="dl_87034258dd0718c21874";
export const url=new URL("../icons/sentiment_very_satisfied.svg?v=d30bddd5d1cd94027b2b79a30b9273d0947c45ee6a092f86458bf8141c88985c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
