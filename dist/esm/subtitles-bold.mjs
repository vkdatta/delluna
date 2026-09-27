export const name="subtitles-bold";
export const id="dl_96dc7cfc72a9ee577518";
export const url=new URL("../icons/subtitles-bold.svg?v=8c43f8b6c35d97b2655ea9a962918b472076e7cddceeeaa4e6aedc0d5c5251c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
