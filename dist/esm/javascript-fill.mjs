export const name="javascript-fill";
export const id="dl_c797ce280f6f076e7ebf";
export const url=new URL("../icons/javascript-fill.svg?v=9af8c38456a0b4e4a664bd99727285795638c0f7a6d1357420017a97cdeb9740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
