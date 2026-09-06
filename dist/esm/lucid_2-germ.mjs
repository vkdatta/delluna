export const name="lucid_2-germ";
export const id="dl_7e6d2e997e1848abb3b0";
export const url=new URL("../icons/lucid_2-germ.svg?v=aca8ed4287a473de4a0f0393fca1e869ee8f0259248c7a8a69a1b4ca01812291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
