export const name="ink_eraser-fill";
export const id="dl_ecd5f60752b64d8c8a01";
export const url=new URL("../icons/I/ink_eraser-fill.svg?v=899a4b91d6872f02e47f414815aac7c24a70fe087ca55c1c0a209de1106c31a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
