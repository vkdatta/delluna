export const name="carry_on_bag";
export const id="dl_21e80cfe7de24b15adf3";
export const url=new URL("../icons/carry_on_bag.svg?v=94d379e3fd790955ec96dd0f6b7ccfd0e571dbf0b07f30f32cd25cb61e82887c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
