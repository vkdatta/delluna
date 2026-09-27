export const name="speaker_group";
export const id="dl_89df02a4cb1752189107";
export const url=new URL("../icons/speaker_group.svg?v=d2e7c694be70f8318f5c03607f137be3220631a80648b875959c8a75579a497f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
