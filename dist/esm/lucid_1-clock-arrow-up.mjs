export const name="lucid_1-clock-arrow-up";
export const id="dl_36714a94655b422fa810";
export const url=new URL("../icons/lucid_1-clock-arrow-up.svg?v=5dd83f8bfd7b90aa076fbf2c10a2d45be02732d527286db37348a8489c5b6a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
