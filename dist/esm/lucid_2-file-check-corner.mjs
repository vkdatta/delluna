export const name="lucid_2-file-check-corner";
export const id="dl_9203d4843f2f404e86a7";
export const url=new URL("../icons/lucid_2-file-check-corner.svg?v=536696edd248aa029318514ba959da97bc70efe492daf1fbad646518943d4ac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
