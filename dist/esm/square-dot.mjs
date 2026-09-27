export const name="square-dot";
export const id="dl_7860a82d76de4c30963a";
export const url=new URL("../icons/square-dot.svg?v=7236f5aa37ba8610ff067b14a9cba0cd0ef51c637fdbab0822e03d6d6dd58049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
