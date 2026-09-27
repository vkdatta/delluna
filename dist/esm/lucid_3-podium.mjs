export const name="lucid_3-podium";
export const id="dl_c0f52e7c3bb84b1fa773";
export const url=new URL("../icons/lucid_3-podium.svg?v=c7b96a5d950ffa0d4751540ac46c4588aecc3096c835c42c2a00a39e32b292c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
