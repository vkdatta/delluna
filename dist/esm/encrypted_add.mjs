export const name="encrypted_add";
export const id="dl_b12e106d1bdec9978280";
export const url=new URL("../icons/encrypted_add.svg?v=ef63cc672a470952fcd046c640d538935a5403e0b6781f7bfe392c503e667fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
