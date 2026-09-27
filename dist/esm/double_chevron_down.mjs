export const name="double_chevron_down";
export const id="dl_23e76532cd8f15f298af";
export const url=new URL("../icons/double_chevron_down.svg?v=c7aff68ab9a09c78ded7cecc0803ad0b9aadb39bec7a79c5384db9f7f06d8dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
