export const name="zodiac-cancer";
export const id="dl_bff9ad3980ce448193a0";
export const url=new URL("../icons/zodiac-cancer.svg?v=61778b1edaa18e1269f512c954447472de9e4b49699fac2ea51a9e05b3042453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
