export const name="shield-warning";
export const id="dl_7fa9c45758054e33a41b";
export const url=new URL("../icons/S/shield-warning.svg?v=e80a55d3710512168a371c701c2270115ef76904852d1315f7d343ac7fd51b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
