export const name="megaphone-simple-light";
export const id="dl_f709af99c4c4425aaf0d";
export const url=new URL("../icons/megaphone-simple-light.svg?v=4af513f8191030a601c0694871d6bf0b6e7ffcd221a4442683f27e5258e72ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
