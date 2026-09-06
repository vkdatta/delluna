export const name="codesandbox-logo-light";
export const id="dl_f6d1e163f23a4637a24c";
export const url=new URL("../icons/codesandbox-logo-light.svg?v=ebc2441199fec0e96f4e1debe4563de4e2f1608366bcd646f3276ef58fcceae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
