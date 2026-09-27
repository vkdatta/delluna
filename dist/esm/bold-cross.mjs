export const name="bold-cross";
export const id="dl_102b2899fd3c2d1d53d3";
export const url=new URL("../icons/bold-cross.svg?v=ef54942ee7f9903c0583447000f3f4fb9d012c7a240547995204ee9b739e12eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
