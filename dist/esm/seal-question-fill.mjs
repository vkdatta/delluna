export const name="seal-question-fill";
export const id="dl_dc43a0f85c409e09f644";
export const url=new URL("../icons/seal-question-fill.svg?v=e8582c44927c54cc0e8e2e44937b17e7450ae2c3c1d6d7a96699d84ac59a11fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
