export const name="binary-thin";
export const id="dl_b390cecf8c1b4e489012";
export const url=new URL("../icons/binary-thin.svg?v=ba055febc47ff242d74faf0376bff383a4c10e92b225b5033e8059694a042fa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
