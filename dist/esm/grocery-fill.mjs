export const name="grocery-fill";
export const id="dl_6f3bf267b5ec127c8d68";
export const url=new URL("../icons/grocery-fill.svg?v=31440c653553600649f47f5afd8b208f4322bd8a6a0ff649b8f9c6b804244a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
