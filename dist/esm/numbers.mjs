export const name="numbers";
export const id="dl_8a9b3c5fe416b22dc99d";
export const url=new URL("../icons/numbers.svg?v=048eab3784bdde849f308f28125f02c53477150735504eaa6d8811e76682bace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
