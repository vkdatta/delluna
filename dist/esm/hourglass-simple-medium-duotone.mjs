export const name="hourglass-simple-medium-duotone";
export const id="dl_53dad18571654905b9d0";
export const url=new URL("../icons/hourglass-simple-medium-duotone.svg?v=6dbed282f4ff2b3ed3c6f4b9541b008c3d4e2ead68df184fef693e923c1a0c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
