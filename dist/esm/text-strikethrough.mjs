export const name="text-strikethrough";
export const id="dl_4c23ed452b0f9a20d4b9";
export const url=new URL("../icons/text-strikethrough.svg?v=68019f9725b1e7d1f76223833738c39fab9fe6bce715fd80a0853c5b391c6764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
