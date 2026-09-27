export const name="fish-duotone";
export const id="dl_1d7b7c0eb9d64b558ab2";
export const url=new URL("../icons/fish-duotone.svg?v=10522a9b0c08ba06c76be4707c3bf2f43da3828607425a43b9d4b6fb2fac7eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
