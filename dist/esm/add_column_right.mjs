export const name="add_column_right";
export const id="dl_e7aa0ab4294d187241c5";
export const url=new URL("../icons/add_column_right.svg?v=c288399771bdfe32caad94b858315bdf7484b5a6dab118701f22006c0e91d2a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
