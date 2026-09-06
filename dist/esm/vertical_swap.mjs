export const name="vertical_swap";
export const id="dl_21d1d3f2eb79425f89de";
export const url=new URL("../icons/vertical_swap.svg?v=07a92bd5afb2663c8ef8e6ca3f3d315064f0abafbf4b2e6ecef0efd87ac53ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
