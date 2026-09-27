export const name="remote_gen";
export const id="dl_f5d1e2856820a2a0d2e4";
export const url=new URL("../icons/remote_gen.svg?v=b823791567a896acbe6e535cb7306714fd0d6f408656455f048c60f8407ad6a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
