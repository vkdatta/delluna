export const name="intersect";
export const id="dl_c07a1f8cf7d4447aa2b7";
export const url=new URL("../icons/intersect.svg?v=facff87add935192997f327acfc538b506853ab3f89acd4c7ea7f002b1d850d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
