export const name="flag_circle";
export const id="dl_4d203023fd52147d0ab4";
export const url=new URL("../icons/flag_circle.svg?v=ff27d8aa9753179c61635a8d1b8e5397e9197de19d4233461d7903d26f4b76e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
