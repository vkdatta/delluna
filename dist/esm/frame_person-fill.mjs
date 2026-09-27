export const name="frame_person-fill";
export const id="dl_e46718afc158361cd650";
export const url=new URL("../icons/frame_person-fill.svg?v=4a5aa0804e93ed95de11beeb383f08e367c9f5fc1dd0248ea0b4ee287fd13b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
