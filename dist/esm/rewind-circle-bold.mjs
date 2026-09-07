export const name="rewind-circle-bold";
export const id="dl_a6a5148d2bc247a4a83a";
export const url=new URL("../icons/rewind-circle-bold.svg?v=5385e1d189d3e563aa041905245dc09fe4972b27070280c7a05778a952df02eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
