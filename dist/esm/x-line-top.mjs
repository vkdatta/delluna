export const name="x-line-top";
export const id="dl_73ba9aca676a4a6a9015";
export const url=new URL("../icons/x-line-top.svg?v=216ae9171c242e7aacee1ff815399aa789e121d5a13541f2de42de69277a289b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
