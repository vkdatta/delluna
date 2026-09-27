export const name="loyalty-fill";
export const id="dl_933dd5f05506393a70e2";
export const url=new URL("../icons/loyalty-fill.svg?v=171d6dd460272f108728b0c0087642416d9e8f9eb8bba9e8b6d4463971ba00ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
