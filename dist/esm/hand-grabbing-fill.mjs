export const name="hand-grabbing-fill";
export const id="dl_8ebc859e5e6b47c0a4ad";
export const url=new URL("../icons/hand-grabbing-fill.svg?v=318664df8943de9057c685848da7fecb23d630106b6243d18684c335b254c289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
