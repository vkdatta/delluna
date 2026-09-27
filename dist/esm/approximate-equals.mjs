export const name="approximate-equals";
export const id="dl_b28f7cd7d7d343feb100";
export const url=new URL("../icons/approximate-equals.svg?v=627ce9c1fe8d1f7033b4019f883e08c997cf02fdf930f95aa0572b98fa3084a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
