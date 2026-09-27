export const name="2k_plus";
export const id="dl_0ef11631c85ea0ca51c4";
export const url=new URL("../icons/2k_plus.svg?v=59d73dd7ece5b8103dc497eedf9f6576a09df7cf8d2fcd7908df5b9a12afc555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
