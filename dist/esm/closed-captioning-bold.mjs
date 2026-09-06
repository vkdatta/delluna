export const name="closed-captioning-bold";
export const id="dl_805677d3225f4fa2a397";
export const url=new URL("../icons/closed-captioning-bold.svg?v=95d6ccbbf305210da8419057ef5b95e6b4aedc96745dbfb61f6a481840714eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
