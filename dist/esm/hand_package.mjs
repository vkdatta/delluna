export const name="hand_package";
export const id="dl_b072b38b5a984bcb8bbf";
export const url=new URL("../icons/hand_package.svg?v=034c0c3cc8b078bc8b4d482e346033d66a26bfcce53873da876b9304e914dabc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
