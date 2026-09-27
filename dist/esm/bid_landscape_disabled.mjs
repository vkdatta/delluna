export const name="bid_landscape_disabled";
export const id="dl_19d7c15274f2ad4b82df";
export const url=new URL("../icons/bid_landscape_disabled.svg?v=e6791ad696c5c17ad30e9db03bd77b7f96b2c8a157e8e4f040992d747c6d6413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
