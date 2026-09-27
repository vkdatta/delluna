export const name="align-center-horizontal-simple-bold";
export const id="dl_465fe3043ff94d0d9ff0";
export const url=new URL("../icons/align-center-horizontal-simple-bold.svg?v=dc33adea2790cd6fd4af591a7e378aa653abad11869392f86bdeb4422421630f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
