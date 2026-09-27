export const name="water_do";
export const id="dl_971dc636c4f46a00f268";
export const url=new URL("../icons/water_do.svg?v=eef71867ef21bce8e5117a96c796000289bcaed7f05a2e82c1f85a71728d8ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
