export const name="circle-light";
export const id="dl_558edb11352c468fa080";
export const url=new URL("../icons/circle-light.svg?v=2312a5c52572f744d9d23608a1311818c295699a990a61bbaac14d507031f08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
