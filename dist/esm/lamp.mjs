export const name="lamp";
export const id="dl_c24efe15b70f43d5835e";
export const url=new URL("../icons/lamp.svg?v=2bc91f1ac4aace23ad25e4f3788f86ec4319b72d7e8e26c4ff6d9e7803f93e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
