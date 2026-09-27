export const name="lucid_3-megaphone";
export const id="dl_d42799d345aa42f28a4e";
export const url=new URL("../icons/lucid_3-megaphone.svg?v=98893027a25116dd0adc8406df42ad8da637b41e4619e7da4fba0f3886802270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
