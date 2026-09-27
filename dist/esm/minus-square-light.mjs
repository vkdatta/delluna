export const name="minus-square-light";
export const id="dl_4f18ee5f6feb4f1c8647";
export const url=new URL("../icons/minus-square-light.svg?v=a78e5407880473e650ae62ff36547ccad3d72a2983b3806b9f82326a00f5bb50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
