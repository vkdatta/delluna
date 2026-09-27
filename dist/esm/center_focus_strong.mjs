export const name="center_focus_strong";
export const id="dl_76d9aef679ea9b2435f7";
export const url=new URL("../icons/center_focus_strong.svg?v=60bb8b285da5eb29d1b6f0577e75263ae8156b29ac09be758f056aebffaa2cd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
