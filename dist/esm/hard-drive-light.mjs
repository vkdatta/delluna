export const name="hard-drive-light";
export const id="dl_01929401c26a47dd916e";
export const url=new URL("../icons/hard-drive-light.svg?v=57b87b1cae6d602a2c2aab705bf947d9e12cf8b7a14bea62bda1dcc1602976b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
