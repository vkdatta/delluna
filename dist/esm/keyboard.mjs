export const name="keyboard";
export const id="dl_cb54360d3eed4f1a9abe";
export const url=new URL("../icons/keyboard.svg?v=96646775c552eb7944a88071ec3d7b93f28fd0e19ae995cfb52957403e38422e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
