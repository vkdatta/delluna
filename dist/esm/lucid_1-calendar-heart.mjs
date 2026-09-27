export const name="lucid_1-calendar-heart";
export const id="dl_6823a97799ba4e76bb34";
export const url=new URL("../icons/lucid_1-calendar-heart.svg?v=cf37da326db72fbbb0cccbc19474aed1c5b87d1cf9360deb8525804168a75b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
