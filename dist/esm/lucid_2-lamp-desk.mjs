export const name="lucid_2-lamp-desk";
export const id="dl_e7437dda9aa64b809b1d";
export const url=new URL("../icons/lucid_2-lamp-desk.svg?v=678f05ed062dfe7fc013dcd59bb5b09728e417f68ed505818ed2578dfe23d6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
