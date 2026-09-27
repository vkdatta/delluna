export const name="prohibit-bold";
export const id="dl_c91e2970976f4db780c2";
export const url=new URL("../icons/prohibit-bold.svg?v=2457f4c2af07c4d62b932d16a1f27a2b48be8323de66654a3b73ee7f416ed9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
