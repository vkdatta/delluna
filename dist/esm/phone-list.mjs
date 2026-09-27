export const name="phone-list";
export const id="dl_4f0b958c6e9d4d739178";
export const url=new URL("../icons/phone-list.svg?v=79cea322bc411f7199bf0d7a7b85599539a3fb49262f62b682f69d7391a12fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
