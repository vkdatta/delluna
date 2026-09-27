export const name="lucid_3-signature";
export const id="dl_81def02cd36246e38acc";
export const url=new URL("../icons/lucid_3-signature.svg?v=75e0fde98826b2fa03574b11a55839be65b646fd6626a8ac184f8fa1c938402e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
