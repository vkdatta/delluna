export const name="lucid_1-circle-parking";
export const id="dl_fa4d6847f9b84cf7a36f";
export const url=new URL("../icons/lucid_1-circle-parking.svg?v=17ce1375d7c91be098d7eebd9813043f8885ad1a92be2ccd0d89fffe963dedf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
