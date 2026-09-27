export const name="paper-plane";
export const id="dl_61d24c265d784eaaad92";
export const url=new URL("../icons/paper-plane.svg?v=13bd233e991be1cc79e327c541b0f6739dcd2fc2dcaefe3fd0920a6f59f06d39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
