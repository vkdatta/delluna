export const name="not-member-of-bold";
export const id="dl_369b0e33bfcd46909d53";
export const url=new URL("../icons/not-member-of-bold.svg?v=5cb589bab03d5f9867235cd5a5373ef69c193a76318d7835f049316397f31e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
