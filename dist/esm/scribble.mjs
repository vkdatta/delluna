export const name="scribble";
export const id="dl_bf3b3f937f41425b877d";
export const url=new URL("../icons/S/scribble.svg?v=de994ea1cf8dfa1acdf35940e26d0555a48c5dc56bb36f2c6fde9d755ef7fd1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
