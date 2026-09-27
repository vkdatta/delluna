export const name="club-duotone";
export const id="dl_2f60de7ab7bf424cb73e";
export const url=new URL("../icons/club-duotone.svg?v=6bc5b9f3aba1a84ceb23e473dc0200d0f0ffb8298a13b59e3a4568a9bea11b7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
