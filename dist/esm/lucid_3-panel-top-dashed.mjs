export const name="lucid_3-panel-top-dashed";
export const id="dl_43f0b19198524b74b95b";
export const url=new URL("../icons/lucid_3-panel-top-dashed.svg?v=e94858574b342ff478e77350aa188cbe6672a66c8fda0a4dbef3cf5d0083ab8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
