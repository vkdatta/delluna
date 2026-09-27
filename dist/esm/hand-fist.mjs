export const name="hand-fist";
export const id="dl_134de256562945c0a8d9";
export const url=new URL("../icons/hand-fist.svg?v=ff12498d11b696ebbeee305e00d753a5daa5f7258ef539b21b1bde97e75ec474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
