export const name="lucid_3-scale";
export const id="dl_3e36b5ed8c5f4c83a1b6";
export const url=new URL("../icons/lucid_3-scale.svg?v=bbc7e64ddd41027fd0c8926ab83557af9a998aef266906f9499e113f8ff0df52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
