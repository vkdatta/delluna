export const name="lucid_1-between-horizontal-start";
export const id="dl_b9721fa3725e45cb96ca";
export const url=new URL("../icons/lucid_1-between-horizontal-start.svg?v=7f189d120159a369ad7d9da5640550db6774f895d951f9a5286c1dcf48a0c9bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
