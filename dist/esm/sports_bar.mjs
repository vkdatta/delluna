export const name="sports_bar";
export const id="dl_fa942f5e085e4f3288ae";
export const url=new URL("../icons/sports_bar.svg?v=5727f2dd27c6cb26849b1ecadc78f41d8453b8b8aa83df4ff2d7f64ea9436f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
