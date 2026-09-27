export const name="lucid_3-octagon-pause";
export const id="dl_07d9e5076b7f49b5abec";
export const url=new URL("../icons/lucid_3-octagon-pause.svg?v=b8139dacee726aebd563934203602075f5bf7f62e5f79f9127cf1c85a1e2e58f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
