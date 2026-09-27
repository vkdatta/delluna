export const name="soundcloud-logo";
export const id="dl_0a0dc9322f59d07d54a6";
export const url=new URL("../icons/soundcloud-logo.svg?v=01d30750b37ad454f6188b2b909c89c43f0c95cc6bd83835c00559e3728e5336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
