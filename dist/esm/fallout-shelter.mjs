export const name="fallout-shelter";
export const id="dl_b5d1f442f13f4a5197c6";
export const url=new URL("../icons/fallout-shelter.svg?v=8e16e5103f15552e5098c148cfbbc1bbc3be0328eeaa0351ed90032fc64d7fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
