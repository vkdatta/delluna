export const name="lucid_2-leaf";
export const id="dl_6dab8d5161f54b0bbbd1";
export const url=new URL("../icons/lucid_2-leaf.svg?v=bec8ae0b93ea7e740360d9a0dc9cf76ddb951c932dcd7868a2428473879b110b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
