export const name="three-d-bold";
export const id="dl_73923ccac0a0b2832d22";
export const url=new URL("../icons/three-d-bold.svg?v=c5f681ad20fe6b42e203a023b3c873715e5e5e6bd61ca34b31773847b6fbdb1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
