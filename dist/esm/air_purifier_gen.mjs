export const name="air_purifier_gen";
export const id="dl_784775be00dc70098c8c";
export const url=new URL("../icons/air_purifier_gen.svg?v=abc354e45328df1fed3bb880f1aed4b6c475cd226cf9e8ea1467b0e901ebce8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
