export const name="lucid_1-clock-arrow-left";
export const id="dl_5b33ccf38ced4bb7becd";
export const url=new URL("../icons/lucid_1-clock-arrow-left.svg?v=3fd37c6b73510bcbe283cc5be36d9074d5c6769ad68caccb4650e45d3468930d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
