export const name="house-simple-bold";
export const id="dl_3169765369874395b150";
export const url=new URL("../icons/house-simple-bold.svg?v=d15ea4bd0dcf21dfb5c93a596dc2a7143f4b4f8f245f9d9b2b6b3314aab88d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
