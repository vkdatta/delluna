export const name="ping-pong-duotone";
export const id="dl_43c5b2428ac740c0930d";
export const url=new URL("../icons/ping-pong-duotone.svg?v=cec68d5a5e19d13a3014adf1df8f7531a47e0722877d9abca11b0b026ee586fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
