export const name="straighten";
export const id="dl_c4924f3e2053f592504b";
export const url=new URL("../icons/straighten.svg?v=f5d68a2e683c3283ba68fbb680a8b8d497c4928b452ebbeba57bf951a910f7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
