export const name="script";
export const id="dl_861c07c738aa0883d86a";
export const url=new URL("../icons/script.svg?v=cdd54626ea55c4ea034156293fd898a0f10aa755519415d4b3799a4feefdec0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
