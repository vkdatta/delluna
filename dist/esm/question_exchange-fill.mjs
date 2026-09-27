export const name="question_exchange-fill";
export const id="dl_42307a7e72393c968fbd";
export const url=new URL("../icons/question_exchange-fill.svg?v=7d93a2b7d10a8edfee4b625a4206b2f5fb2865d204aa54561e40deb0a25e159c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
