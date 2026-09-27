export const name="book-open-text-duotone";
export const id="dl_eacdaf257fef49cca909";
export const url=new URL("../icons/book-open-text-duotone.svg?v=76418669e5c7316443bd96758bc5da07538ca882ec5e96cd5b61cc6519bf5905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
