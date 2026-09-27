export const name="screencast-duotone";
export const id="dl_82848dadb51d59478850";
export const url=new URL("../icons/screencast-duotone.svg?v=d30cbb8e32c30d3a95baaa9df49bec6c6ad7cda391bdb0d224caddbecf87177e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
