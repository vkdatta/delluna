export const name="file-jpg-duotone";
export const id="dl_535eabb8f55040408da8";
export const url=new URL("../icons/file-jpg-duotone.svg?v=1e161441ee44ead166e23991424316c649efc8580c68c8c5e04c728008d3a843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
