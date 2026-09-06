export const name="lucid_2-mail-pen";
export const id="dl_d39da81917df4c688eec";
export const url=new URL("../icons/lucid_2-mail-pen.svg?v=2e8e008a926e7d106d83a2d1fdf0f83be3892913abc26dbb9779cee1b2c034aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
