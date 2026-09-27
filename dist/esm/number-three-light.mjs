export const name="number-three-light";
export const id="dl_fd32639f2bed4d008f4f";
export const url=new URL("../icons/number-three-light.svg?v=1eea65e45b89ec34778ce5a10af2bea74333fb4c4b6c5e892e99a74a99024cc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
