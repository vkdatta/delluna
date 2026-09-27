export const name="table";
export const id="dl_ffe4da87e24335cbd7c0";
export const url=new URL("../icons/table.svg?v=4da143b1263eed31a90849f251afe69c168fef1447cc17fdd13dd0f3af3dd887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
