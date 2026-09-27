export const name="landscape_2_edit";
export const id="dl_b0a1cf0ee98e871995d6";
export const url=new URL("../icons/landscape_2_edit.svg?v=150fbf2ac8488d4736fb3b0e9fd4cc54ded36b081a485618a6da34c507a759f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
