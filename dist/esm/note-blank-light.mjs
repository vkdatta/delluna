export const name="note-blank-light";
export const id="dl_ec4f573ece3a40f7985b";
export const url=new URL("../icons/note-blank-light.svg?v=d2b11f730023e8c094a6a98b62b43b6345ab6637d9b42d5c6f3e150e18d8d352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
