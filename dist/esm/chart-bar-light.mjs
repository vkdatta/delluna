export const name="chart-bar-light";
export const id="dl_43b921c3799f4f2a89d5";
export const url=new URL("../icons/chart-bar-light.svg?v=d5aea739f9131010fa45e1699eccf628d1838a127d9bdff34611092be63d9d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
