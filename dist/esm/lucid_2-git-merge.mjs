export const name="lucid_2-git-merge";
export const id="dl_edf860520f9d4393a900";
export const url=new URL("../icons/lucid_2-git-merge.svg?v=73a937b01b2e59b608f1e6f44d07b4e3d791a9dab66aa6e628028627ab59dbfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
