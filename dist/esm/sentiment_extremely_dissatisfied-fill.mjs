export const name="sentiment_extremely_dissatisfied-fill";
export const id="dl_6b5b6173558010ffa308";
export const url=new URL("../icons/sentiment_extremely_dissatisfied-fill.svg?v=f61f1d98998e60bb4235dd2026092c8b212a205841cc68921a0132b87652c62e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
