export const name="screwdriver-duotone";
export const id="dl_979c4470d4cc79a5bbf9";
export const url=new URL("../icons/screwdriver-duotone.svg?v=302973640f5d0d0163eb8fde5bb8cc96d591b5a86b8f120adf3b93dd74a0f674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
