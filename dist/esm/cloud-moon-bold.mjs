export const name="cloud-moon-bold";
export const id="dl_1c027bf3331a4d40b95a";
export const url=new URL("../icons/cloud-moon-bold.svg?v=397a2e3aa7c96723a7e2c2d31c5e5f317b9eb593e60c940abd2f76f028dba867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
