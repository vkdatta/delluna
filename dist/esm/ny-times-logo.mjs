export const name="ny-times-logo";
export const id="dl_4a1bedfbbfa54654b67b";
export const url=new URL("../icons/ny-times-logo.svg?v=be7ca2835aa82413857e7f69d2f5c6ece460a106ff974764209b770145854216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
