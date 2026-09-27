export const name="shield-checkered-light";
export const id="dl_7ffaf923c42a74c94704";
export const url=new URL("../icons/shield-checkered-light.svg?v=3ace1e5807210a454e15569bfab0dcdffc7371154bd91b3ac43702b414b65289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
