export const name="chart-bar-light";
export const id="dl_43b921c3799f4f2a89d5";
export const url=new URL("../icons/chart-bar-light.svg?v=d0c7d17f260288cf5fa85b4cb02a2030439f5e54a39fe5ecd5c1860d5c692f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
