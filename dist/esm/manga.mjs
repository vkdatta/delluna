export const name="manga";
export const id="dl_0dd17cdf52aa6a4c447b";
export const url=new URL("../icons/manga.svg?v=ce62498bdf8f25b5eabfa8ec5d724e885db0f75c671c05614ceb072612498753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
