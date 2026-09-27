export const name="pencil-light";
export const id="dl_2f2f3bde82564ed39d5c";
export const url=new URL("../icons/pencil-light.svg?v=da6ce19cc07f9638c6968713d84a664b237b29bb879f113343c7b62ba2d096ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
