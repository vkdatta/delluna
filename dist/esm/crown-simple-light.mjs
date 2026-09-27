export const name="crown-simple-light";
export const id="dl_d87181838b4148b29ab1";
export const url=new URL("../icons/crown-simple-light.svg?v=e68f2493c1c5458080a992d6b694ba9f980c39fdcbf86a798879a4ab2bf2adda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
