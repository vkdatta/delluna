export const name="conveyor_belt-fill";
export const id="dl_13b4e22dc4209a446481";
export const url=new URL("../icons/conveyor_belt-fill.svg?v=75988e46c1ea73746f21864dcfad4cf453fc417d75b2a8447f58216400fb6c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
