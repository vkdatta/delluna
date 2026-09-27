export const name="lucid_1-calendar-x-2";
export const id="dl_34c8f2d159aa49d18431";
export const url=new URL("../icons/lucid_1-calendar-x-2.svg?v=4bfb8f09aa5c01544374cfc6f1783e80cc4b9a687cb3f845406768e46c6927f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
