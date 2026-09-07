export const name="cactus-bold";
export const id="dl_dc095dbb290c450dbc5b";
export const url=new URL("../icons/cactus-bold.svg?v=1c2a0459285a47c3bd6383a6e78e27dfd0fb1da695cf0cd25664609f666b31e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
