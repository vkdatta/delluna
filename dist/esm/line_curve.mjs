export const name="line_curve";
export const id="dl_70508166a26ec86b465d";
export const url=new URL("../icons/line_curve.svg?v=ff3ef2282aa35571960cf85eb0eb4a2012f2ea6e850e075683c72d91f9b00c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
