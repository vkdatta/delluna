export const name="lucid_1-chevrons-up";
export const id="dl_a72cf5ac64d044ed9865";
export const url=new URL("../icons/lucid_1-chevrons-up.svg?v=6cd56ad82696278176a96f193cdae38244736d32e7125d6fc32f5cae05e5e63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
