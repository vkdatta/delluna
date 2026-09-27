export const name="lucid_1-arrow-left";
export const id="dl_e908de2aa2b74221a6a6";
export const url=new URL("../icons/lucid_1-arrow-left.svg?v=94c4d12e460f3f515bf794124331825047d8745b161d26590fe4484dd2f387c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
