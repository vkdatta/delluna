export const name="arrow-fat-up-light";
export const id="dl_19e1f28aa19649f6a52b";
export const url=new URL("../icons/arrow-fat-up-light.svg?v=d4bd74a9d39ccc05a95e60b8aada3344b6d7bbb67943e83f84066e2a31ba41b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
