export const name="compress-fill";
export const id="dl_1afcfcbbce3140718e38";
export const url=new URL("../icons/compress-fill.svg?v=6149986ed615d96bb24451f54136ea074c61330ace67b44386227232fe3b0b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
