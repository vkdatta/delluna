export const name="arrow-fat-lines-left-bold";
export const id="dl_e9245f772a624877bcad";
export const url=new URL("../icons/arrow-fat-lines-left-bold.svg?v=4e246244baaff2d2ad6d2fb547d6a46c424c8bf159f7c0b69b979f019cea4f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
