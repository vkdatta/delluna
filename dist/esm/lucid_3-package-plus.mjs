export const name="lucid_3-package-plus";
export const id="dl_2a1db794ac88496d8213";
export const url=new URL("../icons/lucid_3-package-plus.svg?v=831d6698d6727e75e56ca0abca30c82ec06e693a940064c15cab901008207b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
