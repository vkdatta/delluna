export const name="lucid_3-memory-stick";
export const id="dl_3a54b67eadfc4298928f";
export const url=new URL("../icons/lucid_3-memory-stick.svg?v=e9f00a7155d20d8cd3768b295fdb3b233c590b36d94ef76c3fc75efbfb5cd084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
