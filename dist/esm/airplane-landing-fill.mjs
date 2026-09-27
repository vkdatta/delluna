export const name="airplane-landing-fill";
export const id="dl_0b0d629fdea847bda49b";
export const url=new URL("../icons/airplane-landing-fill.svg?v=f4395445fc2537d006f7a42d1923e738e2a8166aea71c5c12411c862b26ded41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
