export const name="checks-fill";
export const id="dl_1d31e712ce5d4cc9a72d";
export const url=new URL("../icons/checks-fill.svg?v=8fd6f646b8869edbea2bf9ec0f9e68b77e5c215ae11e954f81dc24c95a9113e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
