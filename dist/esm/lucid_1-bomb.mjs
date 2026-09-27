export const name="lucid_1-bomb";
export const id="dl_4a7a1f22a0b945ac8f60";
export const url=new URL("../icons/lucid_1-bomb.svg?v=6bbf7bd7ffcd4b6a6be924e86e6efea1c8c47df080b703ef77c47388c0c0dbde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
