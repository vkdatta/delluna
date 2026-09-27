export const name="domino_mask";
export const id="dl_7929d542fd5321b87864";
export const url=new URL("../icons/domino_mask.svg?v=8639e6d897bc3b9578dc8438e5dda0b5242869604873ca30db2587d0944a5fb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
