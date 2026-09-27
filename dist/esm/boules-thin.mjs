export const name="boules-thin";
export const id="dl_c71c5dab83bf44139de1";
export const url=new URL("../icons/boules-thin.svg?v=644ae7809dd19c5284f53764f5608ed47a40188c478d74a525b881192b3a3f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
