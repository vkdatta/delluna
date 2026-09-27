export const name="cursor-bold";
export const id="dl_cb733fb4d34344b38973";
export const url=new URL("../icons/cursor-bold.svg?v=5524258e1bb0257425f865aefab71de6b104634651988762e501ac002b979060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
