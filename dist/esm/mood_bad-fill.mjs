export const name="mood_bad-fill";
export const id="dl_84fe6d1abc9c420bacfe";
export const url=new URL("../icons/M/mood_bad-fill.svg?v=ad9dc5f6304d54b3f5d4a692db33b205f885c0ccf50086f8f2ce3488530f5799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
