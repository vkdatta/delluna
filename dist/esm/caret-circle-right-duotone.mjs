export const name="caret-circle-right-duotone";
export const id="dl_62b55e5c05524ab0bbed";
export const url=new URL("../icons/caret-circle-right-duotone.svg?v=1e005285c4eed2488d6bb660c7b745d9419bb74e596bff83fb3ca6b01596b68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
