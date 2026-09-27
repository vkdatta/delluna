export const name="arrows-in-bold";
export const id="dl_d91da91931194e71a89a";
export const url=new URL("../icons/arrows-in-bold.svg?v=69826ed157754d8e7b9c8f610686da93a08843873e8dc73debab6f012641ba85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
