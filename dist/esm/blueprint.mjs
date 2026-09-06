export const name="blueprint";
export const id="dl_878bd2185cd942b08233";
export const url=new URL("../icons/blueprint.svg?v=fb36e2ee43203d7f238a058aab36353a474b7506c7f9f5ca93dbda5fab808dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
