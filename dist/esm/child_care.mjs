export const name="child_care";
export const id="dl_ed83cca2af699000134d";
export const url=new URL("../icons/child_care.svg?v=6f115765db81bf95d0a8d381433674367db4ccf55f3cc37cffc9e626761848c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
