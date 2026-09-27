export const name="crop_2_3";
export const id="dl_960f72a83c5cb6e0c33e";
export const url=new URL("../icons/crop_2_3.svg?v=be327555ad9190ca2e6617310efdb4c02e9d983194c9f347c07a1d2d00b065a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
