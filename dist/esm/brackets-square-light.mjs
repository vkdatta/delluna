export const name="brackets-square-light";
export const id="dl_d84a27d993cb479e9a46";
export const url=new URL("../icons/brackets-square-light.svg?v=b28e2287fd650c3b5d19bdb69e9cb52d6fb23f5c8ba51afd3e8e0c896df43dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
