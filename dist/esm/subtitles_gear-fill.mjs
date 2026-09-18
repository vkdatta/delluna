export const name="subtitles_gear-fill";
export const id="dl_e4faf6526db74c7888d7";
export const url=new URL("../icons/subtitles_gear-fill.svg?v=46c66a6dff34664de956025da5189aa25b5cb930dc23b2bc48e10d2b9186d215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
