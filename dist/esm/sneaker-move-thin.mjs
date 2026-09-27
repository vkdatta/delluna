export const name="sneaker-move-thin";
export const id="dl_306f2e743c2e66a7e078";
export const url=new URL("../icons/sneaker-move-thin.svg?v=b2964ab18af0cd9c862a986eba0174441fcd7fb0b129a419e5547bb6b4e14a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
