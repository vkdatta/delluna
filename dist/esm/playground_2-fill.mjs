export const name="playground_2-fill";
export const id="dl_d18873debec9bdde4abc";
export const url=new URL("../icons/playground_2-fill.svg?v=bec2394c62228a2bc3ebe8f629ba379c331ec811255f0305699edf2e048640a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
