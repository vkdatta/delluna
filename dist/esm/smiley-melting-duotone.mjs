export const name="smiley-melting-duotone";
export const id="dl_041970f8ceb9480ea553";
export const url=new URL("../icons/S/smiley-melting-duotone.svg?v=504b70e931478d243cf24dec293eb7cb9df298152038ba93091e7423fca41dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
