export const name="solo_dining";
export const id="dl_16218c4139ee9e145546";
export const url=new URL("../icons/solo_dining.svg?v=d78c089dd248587e951a860d085ebb8bee4419d6eddecf2f355b02bb038ff794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
