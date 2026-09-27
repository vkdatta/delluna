export const name="shirt-folded";
export const id="dl_74fb549bedc4a81f2379";
export const url=new URL("../icons/shirt-folded.svg?v=f0ee845eb434f50f3e2a7940cd5d836caba6e000bcd861bae93dd3f9e59a7f48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
