export const name="save_as";
export const id="dl_a930c76f40484179b58a";
export const url=new URL("../icons/S/save_as.svg?v=f7d199a2ff8934e667cc4134ceecccb21d25b917fcb366a4be83a0b51e25ea18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
