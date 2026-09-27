export const name="swap_calls";
export const id="dl_0b76e37a93ac9ebd6c79";
export const url=new URL("../icons/swap_calls.svg?v=5956fbd5e3feb8958b03e90d523ed8c00795cef14bfb8d5c675f5e7239b18ff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
