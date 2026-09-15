export const name="edit_square-fill";
export const id="dl_fad166714b7c4d0cbeb3";
export const url=new URL("../icons/E/edit_square-fill.svg?v=e203eec5f9b3564305ca1d90c0bdf7bd0f97ea4721022ab3506cccf110078a69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
