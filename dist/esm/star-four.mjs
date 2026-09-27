export const name="star-four";
export const id="dl_bb0993f302f29c061cc0";
export const url=new URL("../icons/star-four.svg?v=8ad9f0586eae29e147e7ba30cc80f0cad01061a203c4bc65fcfee52e84706323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
