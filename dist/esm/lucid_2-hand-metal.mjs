export const name="lucid_2-hand-metal";
export const id="dl_4047baf432ff470e8648";
export const url=new URL("../icons/lucid_2-hand-metal.svg?v=eed2c9051430e72431b294ed05d6f6103d9ed363d533c3c4739ad3afef8be2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
