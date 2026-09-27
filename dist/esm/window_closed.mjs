export const name="window_closed";
export const id="dl_6cb5137bcf664bf2ff78";
export const url=new URL("../icons/window_closed.svg?v=a2d4d9afa67da0babeef36d75316878cef52789df186790cc5c16d6e9c33f5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
