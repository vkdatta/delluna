export const name="mask-happy-duotone";
export const id="dl_dda28ee9d72a4b8a99db";
export const url=new URL("../icons/mask-happy-duotone.svg?v=8d1afb82274630c5c066de76362051e6ddc401806df6c1cbb54708ccc9f07a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
