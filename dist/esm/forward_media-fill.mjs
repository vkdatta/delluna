export const name="forward_media-fill";
export const id="dl_28021c6db99806238cd3";
export const url=new URL("../icons/forward_media-fill.svg?v=92e80ed98c4f6bb2aade8caa75df75d32bb3b83a4683985cfaaf2138a27c695d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
