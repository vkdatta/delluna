export const name="free_cancellation-fill";
export const id="dl_eae9223338ff592ee0ef";
export const url=new URL("../icons/free_cancellation-fill.svg?v=0cdf9aeb8049c2740dadd6f0bb37e4f7efc223c5319259c4130ad2bf785aee5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
