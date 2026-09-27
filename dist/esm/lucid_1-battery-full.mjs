export const name="lucid_1-battery-full";
export const id="dl_5ccd9ae0a467453cba38";
export const url=new URL("../icons/lucid_1-battery-full.svg?v=4c3f354ada52db6611c16190261bdae7fb6b0acacf48838aaa286462c19de544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
