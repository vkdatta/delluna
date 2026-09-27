export const name="reddit-logo-light";
export const id="dl_4b04385980bd45908a0b";
export const url=new URL("../icons/reddit-logo-light.svg?v=08efaf256f4ef4b984a612da87404f42a89587044eac89ca2254943fdd4b2abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
