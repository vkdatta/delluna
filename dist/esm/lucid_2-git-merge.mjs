export const name="lucid_2-git-merge";
export const id="dl_edf860520f9d4393a900";
export const url=new URL("../icons/lucid_2-git-merge.svg?v=4ce3165e7fc89ce334210cdcf038ce3f6505319b899b4256d977678af6924882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
