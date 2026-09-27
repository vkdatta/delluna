export const name="joystick-thin";
export const id="dl_f244012be1f8411cb2b9";
export const url=new URL("../icons/joystick-thin.svg?v=a41209472b02661378e60a2210dcf98674be2ba245c0fbcdb4ade886f9c7537a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
