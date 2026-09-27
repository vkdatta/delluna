export const name="lucid_1-arrow-up-wide-narrow";
export const id="dl_5860cefb1b1243c6b761";
export const url=new URL("../icons/lucid_1-arrow-up-wide-narrow.svg?v=a6e3cbdbf51b74cda2f822273e8ec99fde588d79b9bb5f74ac0743b461e0bcdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
