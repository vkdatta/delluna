export const name="file-code-fill";
export const id="dl_7126e3e5ea0e4591a12c";
export const url=new URL("../icons/file-code-fill.svg?v=e8cd932063af15d220efb04919fa78e2c99c1c240624086c2373a84579409b00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
