export const name="feedback";
export const id="dl_f77f7bc516dd2942ccc9";
export const url=new URL("../icons/feedback.svg?v=92409c9aa646fbf94ee85117ce6b634ac8dc560db1617f964b20f82480d1b1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
