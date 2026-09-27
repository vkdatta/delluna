export const name="speed-fill";
export const id="dl_223daf2ca7e01455b9b4";
export const url=new URL("../icons/speed-fill.svg?v=6524b4b96dc49f0d51a4f976961301e88d8b4677991d8ac563775251fac95655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
