export const name="lyrics-fill";
export const id="dl_f3429211b33a43c6afa1";
export const url=new URL("../icons/lyrics-fill.svg?v=87579f4862ae570adf4c65b2af49150fb3a166793424cffb1ebc0052192e3159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
