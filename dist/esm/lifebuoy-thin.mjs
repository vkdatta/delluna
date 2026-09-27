export const name="lifebuoy-thin";
export const id="dl_7bb01f1a43414ad89ff9";
export const url=new URL("../icons/lifebuoy-thin.svg?v=49a34520fa33ad59fd5d34fde8ae653759696bfa8bead3684398e34ca02bf526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
