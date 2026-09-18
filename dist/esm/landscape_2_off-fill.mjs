export const name="landscape_2_off-fill";
export const id="dl_51a085b75049451bb329";
export const url=new URL("../icons/landscape_2_off-fill.svg?v=a8376d2b1b54c807cd3e143abdd72ccfba545e6fcd5e2e63a70330ca90ce9d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
