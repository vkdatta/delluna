export const name="format_letter_spacing-fill";
export const id="dl_7df3d7ca8fc744748e05";
export const url=new URL("../icons/format_letter_spacing-fill.svg?v=f44a909a81f914429f33ba137630c296604fe8a10d6b76be9be357dab5088e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
