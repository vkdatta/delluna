export const name="lucid_2-graduation-cap";
export const id="dl_d0c3249a241d43c49bbf";
export const url=new URL("../icons/lucid_2-graduation-cap.svg?v=c1b8f3f5260bc56c3bce955b39f7c02d870812b9be87468557b479fd069c986b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
