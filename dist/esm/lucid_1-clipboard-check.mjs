export const name="lucid_1-clipboard-check";
export const id="dl_16f82d082e5a4012b382";
export const url=new URL("../icons/lucid_1-clipboard-check.svg?v=a431d35167fc64d960c9b2ef09bd8cfaf0f3af01a8dee3700f5a6df358aef18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
