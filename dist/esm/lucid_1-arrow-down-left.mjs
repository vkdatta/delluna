export const name="lucid_1-arrow-down-left";
export const id="dl_a309679dc48a4faea337";
export const url=new URL("../icons/lucid_1-arrow-down-left.svg?v=d4b05ac19b27367512363ebd34658084316d3087469d62383b338d75dda2d90c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
