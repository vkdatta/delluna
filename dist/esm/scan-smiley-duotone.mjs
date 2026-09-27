export const name="scan-smiley-duotone";
export const id="dl_ae7df89dcd38bc92b3aa";
export const url=new URL("../icons/scan-smiley-duotone.svg?v=526e0fc9544f2abcbb535790ef9311ad0334552e07a5b28535c94684adca6a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
