export const name="lucid_1-clock-arrow-up";
export const id="dl_36714a94655b422fa810";
export const url=new URL("../icons/lucid_1-clock-arrow-up.svg?v=84b6781537546b7fa5af0bc4bd7b36ecf86b4e5d27fb7926208fcd6d3ff0feee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
