export const name="horizontal_align_center-fill";
export const id="dl_e9224451d79cd4935715";
export const url=new URL("../icons/horizontal_align_center-fill.svg?v=de7cbb4d0024e198fbb380c98081e0e80b930fe15e49594857b0ac5031bd253d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
