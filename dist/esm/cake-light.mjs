export const name="cake-light";
export const id="dl_28991b29a9bf4a5a9ffe";
export const url=new URL("../icons/cake-light.svg?v=b6d0b7d2df3b3a0c5faa308ca4a4060d86fbabd26584981e0a99c6b806b06958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
