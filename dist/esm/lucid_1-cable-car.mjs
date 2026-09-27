export const name="lucid_1-cable-car";
export const id="dl_92b37ed0c2f34bc4acd9";
export const url=new URL("../icons/lucid_1-cable-car.svg?v=54aba3bd2e27d4f236c62bb57e72ef54b43cee6fa8851deb8ded04b77a37e545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
