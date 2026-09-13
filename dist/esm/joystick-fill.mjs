export const name="joystick-fill";
export const id="dl_8b1bf90f7bef4e51971b";
export const url=new URL("../icons/J/joystick-fill.svg?v=2e6c3c8452c82ff8779af5c2089a5ce69d2b07740024ab0a513bf43afe35fc9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
