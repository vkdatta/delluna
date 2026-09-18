export const name="restart_alt-fill";
export const id="dl_2e5a5a6a8f1b4516b05e";
export const url=new URL("../icons/restart_alt-fill.svg?v=a52cf24dc065313726d91559a85b5eeac03b09c6ca3764b1b0feb8248e6adab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
