export const name="artist";
export const id="dl_d8f7fd078fd381771b13";
export const url=new URL("../icons/artist.svg?v=2ecb39b2b48541b516a3e0fa7632858c8e61579c06e15b42bc2dde11b69667e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
