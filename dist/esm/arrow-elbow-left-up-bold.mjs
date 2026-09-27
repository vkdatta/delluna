export const name="arrow-elbow-left-up-bold";
export const id="dl_c144124b9e9d48fdad58";
export const url=new URL("../icons/arrow-elbow-left-up-bold.svg?v=d54d3e6d40601498dc9f0d48deda9d338e61830bad2c8cedaa6702d066d0a294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
