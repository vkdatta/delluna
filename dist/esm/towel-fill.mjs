export const name="towel-fill";
export const id="dl_b7cdb94b1e4d77d0791a";
export const url=new URL("../icons/towel-fill.svg?v=3de1b5ff7ae3b4f6b2cccabb62cf2757057310a7ba7e5efe6c58411c5319ae52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
