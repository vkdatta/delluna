export const name="not-subset-of-thin";
export const id="dl_de2bf1c7aee94f80bab1";
export const url=new URL("../icons/not-subset-of-thin.svg?v=106da07204e053d1fc3251069689b9b6c5ab62727541f008e51180976b3d37f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
