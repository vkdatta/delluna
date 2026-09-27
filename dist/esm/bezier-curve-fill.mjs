export const name="bezier-curve-fill";
export const id="dl_574f07cb47534577a2be";
export const url=new URL("../icons/bezier-curve-fill.svg?v=69b8d0af2faf8a22e569835a7f884f04f558a4b1e3e2e92158ae70f1e3af0c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
