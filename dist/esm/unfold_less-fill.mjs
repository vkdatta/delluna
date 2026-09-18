export const name="unfold_less-fill";
export const id="dl_c10e0105c49a4d9aa2e4";
export const url=new URL("../icons/unfold_less-fill.svg?v=7d888ade1369f8817237fb73b24bfe67c5eff1f23544f7fca2b0878ed54e9ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
