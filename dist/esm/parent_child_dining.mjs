export const name="parent_child_dining";
export const id="dl_2486e224ce08dc087440";
export const url=new URL("../icons/parent_child_dining.svg?v=b732b04c01952ec12f3b05840f526476c37e69b498174f7cfda9dd1be4912ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
