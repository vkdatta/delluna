export const name="departure_board-fill";
export const id="dl_c317e3dde4903967617c";
export const url=new URL("../icons/departure_board-fill.svg?v=f1c1be527a334318ea0297f24c083e489ea66966e328f1bc0cb9c69df0e42c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
