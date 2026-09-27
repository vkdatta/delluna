export const name="stylus_brush-fill";
export const id="dl_b91b461af38ec9e85a8e";
export const url=new URL("../icons/stylus_brush-fill.svg?v=9409eaf1b0ef369afd6d0045d63f8e4838b6ebbeda651eb1ae294b9151a697d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
