export const name="split-horizontal-bold";
export const id="dl_c8f14b09a49335bd4f25";
export const url=new URL("../icons/split-horizontal-bold.svg?v=18c88adaa6b4747f7c1f1b1bc7eb899d4e4a38b834a474591ea8c43f4797e2e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
