export const name="arrow_circle_left-fill";
export const id="dl_20b64596249240f39aba";
export const url=new URL("../icons/A/arrow_circle_left-fill.svg?v=ab1a7879a00e9853f08752a117c3541854a25bb7b6faf38b7d06c8919accdbb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
