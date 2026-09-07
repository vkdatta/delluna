export const name="youtube-logo-duotone";
export const id="dl_6e92b6f053874045b87c";
export const url=new URL("../icons/Y/youtube-logo-duotone.svg?v=3d3bc3863dd5b7354551f5391bc9a03edd7ec9ac79f3cb30efd48b2905ae7c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
