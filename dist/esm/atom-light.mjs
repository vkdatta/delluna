export const name="atom-light";
export const id="dl_07d46c20a6654c0c9a24";
export const url=new URL("../icons/atom-light.svg?v=783bf161b5266dd8aabe351931bc7442486571f0365ef4409ac823859dfe40a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
