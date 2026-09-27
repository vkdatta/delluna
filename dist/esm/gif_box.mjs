export const name="gif_box";
export const id="dl_9dabd4c0242cf65924b6";
export const url=new URL("../icons/gif_box.svg?v=7fd58f6f665975a9acb3d5bbce2672b7ea681c8b74ce50fc375ebd65c1a7bea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
