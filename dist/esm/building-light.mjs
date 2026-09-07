export const name="building-light";
export const id="dl_9c39eee6391e42a0a579";
export const url=new URL("../icons/building-light.svg?v=780031f50c515b0d77f0efa342623f52a91c608bdc89ed9d7dac5ba97f07da6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
