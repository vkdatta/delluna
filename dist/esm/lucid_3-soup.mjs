export const name="lucid_3-soup";
export const id="dl_d436fd63b23a4f62a3b7";
export const url=new URL("../icons/lucid_3-soup.svg?v=db36c8915f6eb3569dc12a271f35966ddd59992a4e40c7aeff02fa66371bce30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
