export const name="clarify-fill";
export const id="dl_d691f516acc9a929a13c";
export const url=new URL("../icons/clarify-fill.svg?v=0c17b42b17d5a5904cf31d79e40f8e432fb1ae32a439ab945ec8a1e585beecd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
