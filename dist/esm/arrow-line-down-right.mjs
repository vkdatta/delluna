export const name="arrow-line-down-right";
export const id="dl_8cd72d0a140c4bd584e6";
export const url=new URL("../icons/arrow-line-down-right.svg?v=328ffc6f57ff75d1c8a957d0fe5e481d7d5553cfc39c6fe42b75f4d2cc106a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
