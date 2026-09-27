export const name="windows-logo-thin";
export const id="dl_86048685dae1da2d80e8";
export const url=new URL("../icons/windows-logo-thin.svg?v=057c5d194ce170433d016cd307f8ab7187f623dd361be430e3f2a358f27715ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
