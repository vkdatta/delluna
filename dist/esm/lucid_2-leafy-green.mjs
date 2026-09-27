export const name="lucid_2-leafy-green";
export const id="dl_1c938c8da3104940ad4b";
export const url=new URL("../icons/lucid_2-leafy-green.svg?v=813c36d087bc1a4b5c3243ae0aebd000657ced9420b34cbb5849763a2ed2cc8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
