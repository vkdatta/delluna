export const name="lucid_2-file-down";
export const id="dl_24930fe90af4415e90c2";
export const url=new URL("../icons/lucid_2-file-down.svg?v=ae6ed243b36f2fa1281bc52ea633eefe70624fafaaadfc334051cde2b37b5a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
