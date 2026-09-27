export const name="thunderstorm";
export const id="dl_3ae33f050cd49bd4180e";
export const url=new URL("../icons/thunderstorm.svg?v=fc1993e2a0b231b315a58604ee4cab8dd048e6f9c91a4bc12447ba4d4dee70da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
