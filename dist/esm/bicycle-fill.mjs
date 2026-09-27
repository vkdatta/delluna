export const name="bicycle-fill";
export const id="dl_059e0ac431cd447194f5";
export const url=new URL("../icons/bicycle-fill.svg?v=e9cc5544242806ab2b9d60659ffa4428b47b48c5637fabbb7bba2bdf7ff64f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
