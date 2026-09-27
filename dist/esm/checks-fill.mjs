export const name="checks-fill";
export const id="dl_1d31e712ce5d4cc9a72d";
export const url=new URL("../icons/checks-fill.svg?v=f9c2c80daf4bf762e111698c2f8e4c13e88348d538d7b48d2cad22a87b2e0159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
