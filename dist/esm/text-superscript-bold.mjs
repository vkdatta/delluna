export const name="text-superscript-bold";
export const id="dl_1fe9bbae6af3492c8de4";
export const url=new URL("../icons/T/text-superscript-bold.svg?v=386218b32d39a77eeb5e3e148f759bd9ad61c27bf7aa802d79841bd89a0caa8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
