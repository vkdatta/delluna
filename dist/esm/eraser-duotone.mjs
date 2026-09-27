export const name="eraser-duotone";
export const id="dl_e72a46690bb34e779812";
export const url=new URL("../icons/eraser-duotone.svg?v=37e454aa29dfd8011a4f67ebbf82fff45b6a6918d299d5bc738e8948b6cf2276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
