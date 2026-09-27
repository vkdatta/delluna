export const name="high_quality";
export const id="dl_b9aff9a026346dad7b25";
export const url=new URL("../icons/high_quality.svg?v=29bce92762bdac5ad8b0aab26eb6153c2a1a177fc82a9dae8b21e06bb7afe44f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
