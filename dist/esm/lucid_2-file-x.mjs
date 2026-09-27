export const name="lucid_2-file-x";
export const id="dl_1e0d565c583a4ad0a659";
export const url=new URL("../icons/lucid_2-file-x.svg?v=542c3fc125682e8449b45e914e7c19ae2cf82c9c5d49f14c0c8caae5513fd2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
