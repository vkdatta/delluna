export const name="caret-line-down-bold";
export const id="dl_c79cfa8ecfdb4d52b736";
export const url=new URL("../icons/caret-line-down-bold.svg?v=0b93e5ec6c5966cba0d46e7af1d8b0ad5655c90c7e3f8a9d9510b69d070a6b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
