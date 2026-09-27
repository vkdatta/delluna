export const name="lucid_1-clock-6";
export const id="dl_fccce8e2393947adb08e";
export const url=new URL("../icons/lucid_1-clock-6.svg?v=6074a97b6ff19514fc023539ef86766709ad5fd8375a4dfabbd9b4ac50342eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
