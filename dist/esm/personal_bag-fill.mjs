export const name="personal_bag-fill";
export const id="dl_d68f186a4cd57fba1d84";
export const url=new URL("../icons/personal_bag-fill.svg?v=623b65fafb4622c778efc640a9b5c70fb81383ac211b1af57d5fa8d77b27e33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
