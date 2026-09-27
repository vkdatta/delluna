export const name="radio-button-fill";
export const id="dl_c0498b29fbc648b7a80a";
export const url=new URL("../icons/radio-button-fill.svg?v=8c96e75b236cf973f37126880a7c784846567bf3920163a521c7e7144d4f0997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
