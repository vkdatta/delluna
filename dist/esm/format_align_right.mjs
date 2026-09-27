export const name="format_align_right";
export const id="dl_8a995e9f739843bd3b2a";
export const url=new URL("../icons/format_align_right.svg?v=4978b7e51ccb7c92f2514be1c395b777c594cc5c5bd9f648d30ab445e0e28f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
