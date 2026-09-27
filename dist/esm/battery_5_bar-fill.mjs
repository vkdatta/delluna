export const name="battery_5_bar-fill";
export const id="dl_8a0e0ceb282e329081c5";
export const url=new URL("../icons/battery_5_bar-fill.svg?v=64c4384be35b235a9ec7a1abd8cf3f4edcbf612761163dd5a4bbc076f29d55a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
