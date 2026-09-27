export const name="lucid_3-minus";
export const id="dl_b489c283c5ee4ca58496";
export const url=new URL("../icons/lucid_3-minus.svg?v=02fbc96faf1a9cc34383d4ec82a54a2b1de5a05a98eb6222e65b22b7a01ff460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
