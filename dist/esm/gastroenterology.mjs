export const name="gastroenterology";
export const id="dl_28b08729045a0f636951";
export const url=new URL("../icons/gastroenterology.svg?v=b63bc2736d680f4a1e4a886f070e058fa63864995c3b6474a9c8517f7a45ef80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
