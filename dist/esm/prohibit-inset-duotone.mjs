export const name="prohibit-inset-duotone";
export const id="dl_616cb0620f9a49689696";
export const url=new URL("../icons/prohibit-inset-duotone.svg?v=fde5786d521db3d44496186016286b0e0cace2cf80f28ab30cde6e8a4ceebb67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
