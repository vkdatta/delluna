export const name="tote-fill";
export const id="dl_5863ac35e62c309849c2";
export const url=new URL("../icons/tote-fill.svg?v=4dd6b0bbd098094afe0c41f467c392a59517d00d9f17bb77acdee918aa12ee1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
