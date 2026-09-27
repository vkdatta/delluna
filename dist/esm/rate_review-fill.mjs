export const name="rate_review-fill";
export const id="dl_efb71e4ce5a826f839ae";
export const url=new URL("../icons/rate_review-fill.svg?v=765b4b73fd242a79f567ff1dc99c9f4d3b9c78d9e6029c8f3015612635978a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
