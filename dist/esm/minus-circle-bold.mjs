export const name="minus-circle-bold";
export const id="dl_a26f8e6d3f4f43f5b280";
export const url=new URL("../icons/minus-circle-bold.svg?v=de864a4dd2cb22a4b183d48e779636f1d0f218a599a5306d80486970a6c3aba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
