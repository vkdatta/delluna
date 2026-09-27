export const name="rectangle-duotone";
export const id="dl_0f77ec179f4340e1a49b";
export const url=new URL("../icons/rectangle-duotone.svg?v=02f1b05567b13e6ddfeeb51af6f3e5861e1dcc37b493d7e3bf14759a50375d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
