export const name="flying-saucer";
export const id="dl_58b4c65526d0425b9c2c";
export const url=new URL("../icons/flying-saucer.svg?v=5b376d26bf258f0b7989355c02c5e18aaa5a659843bd7c9bd013a0733f234435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
