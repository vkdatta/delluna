export const name="wave-square-bold";
export const id="dl_20709ded6845414b8345";
export const url=new URL("../icons/W/wave-square-bold.svg?v=fb745a2b656a43251a3e78e1d51500cc3893862ef4ed99bf11044254294740a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
