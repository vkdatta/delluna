export const name="lucid_2-git-merge";
export const id="dl_edf860520f9d4393a900";
export const url=new URL("../icons/lucid_2-git-merge.svg?v=e1effdb9e648fefadff276ebb50b5ea1ff7e3e3d707ad27bb0a83d9cfc5a54db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
