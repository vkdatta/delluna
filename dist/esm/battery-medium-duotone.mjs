export const name="battery-medium-duotone";
export const id="dl_ec76e9e6ee0b403f87e1";
export const url=new URL("../icons/battery-medium-duotone.svg?v=39d7dcb8d27198f7a0fc2ffdf1aa441eb0283ab71c9ec213122cf60848c0ff84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
