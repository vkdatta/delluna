export const name="lucid_3-square-arrow-out-up-right";
export const id="dl_8d8908287ebc457a8eec";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-right.svg?v=1faa16ffc4a61c6965ba64ccd2647c7cbb288957b156d16ed19c1c24f6d588df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
