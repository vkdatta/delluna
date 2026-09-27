export const name="battery-charging-vertical-light";
export const id="dl_ab4d5484b8e64f84b07b";
export const url=new URL("../icons/battery-charging-vertical-light.svg?v=de927d188ec43f172779fef3377f6466252be0c840cb970fb889e908d0457b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
