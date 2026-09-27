export const name="label_important";
export const id="dl_4be9ba0db8acbed0c928";
export const url=new URL("../icons/label_important.svg?v=d058238513f12b9e5452de5f09d813df606868187d17230c02e1607c1f346ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
