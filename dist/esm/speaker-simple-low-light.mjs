export const name="speaker-simple-low-light";
export const id="dl_b71559cf255fd8249f8f";
export const url=new URL("../icons/speaker-simple-low-light.svg?v=547490ef0af3eda7c021509f75961fb74d5b84cba12963f930d1a9ab9f089012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
