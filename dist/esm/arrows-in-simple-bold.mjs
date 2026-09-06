export const name="arrows-in-simple-bold";
export const id="dl_64b27238e89740b9bb70";
export const url=new URL("../icons/arrows-in-simple-bold.svg?v=34e98687d20d943f343986170c87ee45c554d667ebdd689f5ec1eec3d09bfc0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
