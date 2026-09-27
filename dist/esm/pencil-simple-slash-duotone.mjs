export const name="pencil-simple-slash-duotone";
export const id="dl_a814a85c4ef84e8cb33a";
export const url=new URL("../icons/pencil-simple-slash-duotone.svg?v=1f6ab8a6e48401f4d7025428222d44abfd0afab7bc3a7e1dfdb7bcffdb24b72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
