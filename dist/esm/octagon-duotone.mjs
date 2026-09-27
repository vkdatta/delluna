export const name="octagon-duotone";
export const id="dl_86902b80eef442c99e71";
export const url=new URL("../icons/octagon-duotone.svg?v=0c07f979452ec6dd68eb5967f3cf0996121380b0733b2d80e2063184f9d7f4f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
