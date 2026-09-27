export const name="mic_external_on";
export const id="dl_be947da87d5f63f33726";
export const url=new URL("../icons/mic_external_on.svg?v=0af249186f6186170c9d8401d3b7cb97072f47296b60874f666e46583b47d7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
