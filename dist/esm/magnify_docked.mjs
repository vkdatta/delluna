export const name="magnify_docked";
export const id="dl_346d139c2e5b4bdda5fb";
export const url=new URL("../icons/magnify_docked.svg?v=b160c2cb91666a7bb4a7b8532ead402a230e33b17d6082de37d5f7e23caf7ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
