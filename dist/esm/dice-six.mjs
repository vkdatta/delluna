export const name="dice-six";
export const id="dl_4c1ba088b27a49b9abf0";
export const url=new URL("../icons/dice-six.svg?v=cf3439fc8645cdca36dffaf6a36cb267954b4d09dc13b776f4341c5ed248513c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
