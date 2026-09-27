export const name="menu_book_2";
export const id="dl_c285fc1fe41843f2ed2b";
export const url=new URL("../icons/menu_book_2.svg?v=94a23ee0f390d5bd2c722d303d0a6f2e5b775ab341e36bb475532e35bd09adc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
