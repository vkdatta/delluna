export const name="aod_watch-fill";
export const id="dl_707646f417de61178197";
export const url=new URL("../icons/aod_watch-fill.svg?v=9e530be46d4eecf2bac7048450da313e4b0b4ba35ece87a1edc7e5bd2265e37e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
