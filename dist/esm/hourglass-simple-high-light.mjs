export const name="hourglass-simple-high-light";
export const id="dl_94fb14a7c77f401d81f8";
export const url=new URL("../icons/hourglass-simple-high-light.svg?v=ee24fe728b57b2fc87a59ebca181881f7b541a39f199b9e06d0d845822bec141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
