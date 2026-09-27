export const name="outbox_alt";
export const id="dl_ff393b380d3b1d0bfca4";
export const url=new URL("../icons/outbox_alt.svg?v=c87fc35642832be5502eca17a9068e1dacda28aa3a49b8addb48226721397994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
