export const name="donut_small";
export const id="dl_5345df18ae584eed7b6d";
export const url=new URL("../icons/donut_small.svg?v=35eefe028799e9ccc4ae753f6323e30b2fd2d8b3f5415917b9c87e6f9a65ab92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
