export const name="microscope";
export const id="dl_1dccd67d94ae4164b4f5";
export const url=new URL("../icons/microscope.svg?v=4f59534fb2bd3739829fd0954b60bf4d5b7c8810d8ddbfebe160080e745cf6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
