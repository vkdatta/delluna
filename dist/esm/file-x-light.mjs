export const name="file-x-light";
export const id="dl_1aadcea6bb2c4c25b3e7";
export const url=new URL("../icons/file-x-light.svg?v=db0e57e82bc4a3d2ee2045b31d0fd996668bc94966a4bd912d280d7e74e78eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
