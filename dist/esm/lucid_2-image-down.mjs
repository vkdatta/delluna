export const name="lucid_2-image-down";
export const id="dl_d89c27f8a7dd47638acb";
export const url=new URL("../icons/lucid_2-image-down.svg?v=543552ce77dc410436b5a576efb6f63dd6cc319efec4ffd50f1b50a684152395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
