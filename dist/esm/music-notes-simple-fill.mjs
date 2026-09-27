export const name="music-notes-simple-fill";
export const id="dl_703d97ac5d8d457e94a9";
export const url=new URL("../icons/music-notes-simple-fill.svg?v=36e5bc5721e7875b8f7c6add9cb3bd769f6e22c78bfde2b501402f14d53cb876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
