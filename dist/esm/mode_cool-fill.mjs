export const name="mode_cool-fill";
export const id="dl_ffba3ffd91544527aba0";
export const url=new URL("../icons/M/mode_cool-fill.svg?v=1515f7ab593b2191a7514046c3aced077d870d4d26b8b76f614ca31ffa1da8f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
