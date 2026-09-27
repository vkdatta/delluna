export const name="speaker-hifi-fill";
export const id="dl_379c76bae19e2c28b674";
export const url=new URL("../icons/speaker-hifi-fill.svg?v=b0cd7994c53988239efc4f1e6cd08e1dd559ecbcbcbb0943cb0c71b6d64ed937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
