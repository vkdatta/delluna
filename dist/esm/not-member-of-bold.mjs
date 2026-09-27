export const name="not-member-of-bold";
export const id="dl_369b0e33bfcd46909d53";
export const url=new URL("../icons/not-member-of-bold.svg?v=16ad7a1e98c5293b2e5c17e9440f93efffa563e9c10546bdde6e586d33cf08b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
