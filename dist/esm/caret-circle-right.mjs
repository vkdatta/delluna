export const name="caret-circle-right";
export const id="dl_2af628287cba4e2cadeb";
export const url=new URL("../icons/caret-circle-right.svg?v=0969a29b5f89244008a49eccf2f37ccaaacd0e52d363fc05d94a2c1d3886fae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
