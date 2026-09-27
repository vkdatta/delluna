export const name="swipe_up-fill";
export const id="dl_5f4da0f948eb87fec712";
export const url=new URL("../icons/swipe_up-fill.svg?v=bc77bd256ecc4f1b4df66c69c0331e30a1b0159c350552498487e7ad560ff238",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
