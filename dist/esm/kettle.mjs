export const name="kettle";
export const id="dl_e24e8eb0c8043ab34dca";
export const url=new URL("../icons/kettle.svg?v=d64f52d323f74114f8728555b7fef337281899a4e088dc507758579c7249eea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
