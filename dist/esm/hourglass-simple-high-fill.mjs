export const name="hourglass-simple-high-fill";
export const id="dl_a7a24e33d991439c9f04";
export const url=new URL("../icons/hourglass-simple-high-fill.svg?v=eddf17a9a5082a697f317dc59e70507b5b6f968983d1941ec76f3cedaad6ace5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
