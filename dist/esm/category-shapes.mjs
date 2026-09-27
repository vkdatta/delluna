export const name="category-shapes";
export const id="dl_4e7e76a832c0dcfafe8d";
export const url=new URL("../icons/category-shapes.svg?v=d67ad11f027dce4e9072281350992bd460603f21cee523da19b2cd4e54575f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
