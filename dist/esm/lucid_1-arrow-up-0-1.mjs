export const name="lucid_1-arrow-up-0-1";
export const id="dl_3c444ea7d8d64a7f86e7";
export const url=new URL("../icons/lucid_1-arrow-up-0-1.svg?v=1d2c0773adaaf53c5c597df33061800b2fbe8dfea878db41f0ec133614e55579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
