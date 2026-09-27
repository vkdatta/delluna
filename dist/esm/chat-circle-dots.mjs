export const name="chat-circle-dots";
export const id="dl_a1930a1e437241ceb7cf";
export const url=new URL("../icons/chat-circle-dots.svg?v=b60c05a9f6e3eb451fd15ea81b17643c0f30c1f352feccffe42ebd33512f8e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
