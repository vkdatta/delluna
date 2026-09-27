export const name="lucid_2-list-checks";
export const id="dl_b2c59e9f4c174526a318";
export const url=new URL("../icons/lucid_2-list-checks.svg?v=9ddc1ff6ea2d56b77f758f2e048b81605b87fcde36bf706832d0e80b5e242d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
