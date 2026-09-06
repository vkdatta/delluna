export const name="device-tablet-bold";
export const id="dl_94ce0a151b09433783ea";
export const url=new URL("../icons/device-tablet-bold.svg?v=b4d35d52c39563ef331fecd9a2388acfd57420d4b8b1ceb9e58d26003a8d494f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
