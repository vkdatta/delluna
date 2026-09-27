export const name="tv_gen";
export const id="dl_5abb3cb56dee5b88c556";
export const url=new URL("../icons/tv_gen.svg?v=a78720d34f0ae5cdb0d348e6704e9748c884e345fc68a7f7127ab9242354a8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
