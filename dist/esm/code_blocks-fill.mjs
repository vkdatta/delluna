export const name="code_blocks-fill";
export const id="dl_a8ffccda08727fe3f402";
export const url=new URL("../icons/code_blocks-fill.svg?v=d37d756f2ebef27d322be4b79bc6f64bf6c63fab196bf63bbd8ead3ec04a223d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
