export const name="caret-up-duotone";
export const id="dl_9201fef2185d411887a0";
export const url=new URL("../icons/caret-up-duotone.svg?v=9efcb7c2857537cc1ebd5265ab4c640132fd779e88dd1bd2bf576ed0bc6e09cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
