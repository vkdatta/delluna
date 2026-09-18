export const name="format_h2-fill";
export const id="dl_6b108b7c321d416b8b21";
export const url=new URL("../icons/format_h2-fill.svg?v=34c254fa08d2a3e9fd63f82909d17029d7d25a07af5f5626c711e94783db6162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
