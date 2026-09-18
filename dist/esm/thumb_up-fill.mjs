export const name="thumb_up-fill";
export const id="dl_45621cb1d52647a1a9d8";
export const url=new URL("../icons/T/thumb_up-fill.svg?v=75b7f359bbf98daaa41d669ceea5e6f8a1d17a34dc576c379903d0b3f2c3f6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
