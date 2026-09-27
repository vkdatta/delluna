export const name="mobile_wrench";
export const id="dl_0a5aa1fc90294a40e194";
export const url=new URL("../icons/mobile_wrench.svg?v=9a308937c6cc78f61cb7d9bb1250d05532a8402b6d7ee2e20aadd373ec444cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
