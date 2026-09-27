export const name="brightness_6-fill";
export const id="dl_31536c7af9b35980c3a5";
export const url=new URL("../icons/brightness_6-fill.svg?v=fbe32ebee7a8d1372cbcb838438a22b83f89d61d5e69aba395e002a64cf69973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
