export const name="water_medium";
export const id="dl_cfdd117545f06a0ab124";
export const url=new URL("../icons/water_medium.svg?v=a93c02d77d85ea7739fbcb9f2a4e254fdb70e2baf9906e6dc81eb310232fadd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
