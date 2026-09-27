export const name="person_off-fill";
export const id="dl_b404df481b1be1b87601";
export const url=new URL("../icons/person_off-fill.svg?v=5551752965422b4ccc90147502f4b93efab3f52c72627d3f21f6efbdc7fadb38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
