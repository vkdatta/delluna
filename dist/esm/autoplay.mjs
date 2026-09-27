export const name="autoplay";
export const id="dl_0c3a388edb1f98ced5e6";
export const url=new URL("../icons/autoplay.svg?v=a46405838dffe99e62d9e4390262a392b99d95aa1b9b0d475749fcc80640a481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
