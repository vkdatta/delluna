export const name="moon-thin";
export const id="dl_e6787f0c2b694753bafb";
export const url=new URL("../icons/moon-thin.svg?v=54d4bdf7f18450a715f18bc2526d32de598ae8db7a28dc53c9d3ce8e5af0b31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
