export const name="share-fat-duotone";
export const id="dl_fb029855c5e1a01addc7";
export const url=new URL("../icons/share-fat-duotone.svg?v=06f1a30b9f3c91121542615ac647ad462ced1cd1f6578767cbc8230744b865b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
