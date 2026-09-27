export const name="person-simple-bike-light";
export const id="dl_d07c947077344dcda09c";
export const url=new URL("../icons/person-simple-bike-light.svg?v=3cd9c4cd6e8f3036cbbbf70a19888d17e4cf1af477232a51fffe0fcd264fdbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
