export const name="lucid_1-badge-cent";
export const id="dl_5275bdc8ac194e33abd9";
export const url=new URL("../icons/lucid_1-badge-cent.svg?v=1c6e1cc16089eadcc9b2528481a9c5a549c918403df16c0ff186292c8b24e68a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
