export const name="lucid_2-git-merge";
export const id="dl_edf860520f9d4393a900";
export const url=new URL("../icons/lucid_2-git-merge.svg?v=7d09e5931d7c919f78eb4b13859ff8114aa4a12731080e0520268bb576d842b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
