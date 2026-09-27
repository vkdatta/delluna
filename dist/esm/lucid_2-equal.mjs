export const name="lucid_2-equal";
export const id="dl_bfcc1008268c4eaeb053";
export const url=new URL("../icons/lucid_2-equal.svg?v=9c9c450d820c5cba0221d4a2f2db5385a4223d8fbfb88ce8327694f144bcc760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
