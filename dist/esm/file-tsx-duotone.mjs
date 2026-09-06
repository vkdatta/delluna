export const name="file-tsx-duotone";
export const id="dl_1bfd2c1e085f4c4d8eae";
export const url=new URL("../icons/file-tsx-duotone.svg?v=2b65cc5b66f1a522f8aed4a6a99f048ef6525215a620793b6db401a89f67bd61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
