export const name="tv_guide-fill";
export const id="dl_c3c12766718b962db384";
export const url=new URL("../icons/tv_guide-fill.svg?v=c535071d4b14488aaff5272323ec427825a678a961245e34d79f937da75ed1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
