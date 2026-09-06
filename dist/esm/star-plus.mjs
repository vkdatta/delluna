export const name="star-plus";
export const id="dl_d21bef4e51264bd99d8f";
export const url=new URL("../icons/star-plus.svg?v=2aab6c4e95086998a29ee7aa0326343c6ceb98ba9862d57fd851249366c992ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
