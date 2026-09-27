export const name="arrow-square-in-light";
export const id="dl_697b8c3924e648c2a548";
export const url=new URL("../icons/arrow-square-in-light.svg?v=b223181d6b4929acf4f7046de0c25ad732fafc79971254b9250463f1460b4a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
