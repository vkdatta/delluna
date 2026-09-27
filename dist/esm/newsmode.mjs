export const name="newsmode";
export const id="dl_43e66b42cd862d4c24e3";
export const url=new URL("../icons/newsmode.svg?v=0ae20f94e6c5140062f5e60d8c7b6e0bc7f320143c4b5369840421f5b6bd331a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
