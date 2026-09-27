export const name="cow";
export const id="dl_346e3be44b5c4bf5ac2d";
export const url=new URL("../icons/cow.svg?v=df3c4d12baa93b9c6542f1dfa573deffc9ab21f1ba13643e131400c15aa53421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
