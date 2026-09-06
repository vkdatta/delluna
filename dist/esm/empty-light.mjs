export const name="empty-light";
export const id="dl_ff445b393fec423fbd99";
export const url=new URL("../icons/empty-light.svg?v=3ca7f92d8f89b7ff91240660ed47ee11fa1b0d9827531d5249728378e52f4263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
