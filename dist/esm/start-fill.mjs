export const name="start-fill";
export const id="dl_f52e5605a4a7dd6e9c1b";
export const url=new URL("../icons/start-fill.svg?v=8b30a42a26a9e459d737841f39056ca95a2a63d186f85825037113bf47454e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
