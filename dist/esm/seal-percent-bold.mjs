export const name="seal-percent-bold";
export const id="dl_b3e2ec8f382a524614a0";
export const url=new URL("../icons/seal-percent-bold.svg?v=dc759dff8f78a08394c51d0750cc4c4757dfd37f4c709d2bc5ede669d35bd32d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
