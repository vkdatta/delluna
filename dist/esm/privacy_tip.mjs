export const name="privacy_tip";
export const id="dl_7d8a9647dff923dd5c9c";
export const url=new URL("../icons/privacy_tip.svg?v=1c2bf0befa72ddb92ca9cfb8e107d41a6bf707f0d77821880eeb385005f4f002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
