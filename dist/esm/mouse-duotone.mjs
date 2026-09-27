export const name="mouse-duotone";
export const id="dl_7fa45f88b0e74a39b8f9";
export const url=new URL("../icons/mouse-duotone.svg?v=cff74accf05eba5c3ee7cdd392f0a2ca7816d881739cf3da5f1caaf60adff438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
