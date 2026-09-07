export const name="scan-smiley-duotone";
export const id="dl_635d6bb0028c498bbef7";
export const url=new URL("../icons/S/scan-smiley-duotone.svg?v=526e0fc9544f2abcbb535790ef9311ad0334552e07a5b28535c94684adca6a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
