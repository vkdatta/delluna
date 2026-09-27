export const name="lucid_2-id-card";
export const id="dl_9ffffb4d4be44ded8b7b";
export const url=new URL("../icons/lucid_2-id-card.svg?v=6d25d290a9e5594ab9bae00ae46ea349d1c52b8134cc7c07f8105ceb5ea1bd61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
