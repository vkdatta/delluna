export const name="battery-warning-duotone";
export const id="dl_97344ba70021446f85df";
export const url=new URL("../icons/battery-warning-duotone.svg?v=2ae0ab7b31b9db47a0f4af57709a65eba11804a367e1413c88aa0cc7a4e8a31a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
