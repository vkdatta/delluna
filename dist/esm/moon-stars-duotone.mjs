export const name="moon-stars-duotone";
export const id="dl_163252f004104763ab82";
export const url=new URL("../icons/moon-stars-duotone.svg?v=5c8a51e78df807072580039597d7b5e32a380641c0336fdec164d31a9713e4ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
