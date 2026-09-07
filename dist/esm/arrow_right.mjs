export const name="arrow_right";
export const id="dl_7a894f6e507140bcbfe2";
export const url=new URL("../icons/all_60_named_svgs/arrow_right.svg?v=3bb7e729704ecc5cb6887a7e608ff781833cf70a477bfa56f788018673d74541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
