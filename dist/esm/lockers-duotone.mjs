export const name="lockers-duotone";
export const id="dl_56e3ba85130340419125";
export const url=new URL("../icons/lockers-duotone.svg?v=0f08bef6b4d56b6dc2c6db24fa8204fcfed3007398264a0b4a238aad52b26208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
