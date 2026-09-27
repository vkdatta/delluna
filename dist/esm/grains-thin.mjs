export const name="grains-thin";
export const id="dl_9d1cd5141fdc466ca2ec";
export const url=new URL("../icons/grains-thin.svg?v=7f4ced6325151183ce82f4179418d07f3673028e54554beb94bf2ad81e1a16d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
