export const name="lucid_1-component";
export const id="dl_05cd6b370bb24edc8ba3";
export const url=new URL("../icons/lucid_1-component.svg?v=68edb895898bf09e0bad85c3cc46458759a00f55db027dc94ebda3a7164abba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
