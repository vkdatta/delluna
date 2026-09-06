export const name="copyright-duotone";
export const id="dl_7f65133d0b144f298f08";
export const url=new URL("../icons/copyright-duotone.svg?v=e415f363f7734fc8a3acb846d4c76fcf10d8e5ef60dee848a1137b6d1bb6f341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
