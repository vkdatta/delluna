export const name="vacuum_2_on";
export const id="dl_4b7f76fff4967652436e";
export const url=new URL("../icons/vacuum_2_on.svg?v=b0dd56d4225402e82fb638883f822cde86fd64de2b308f17f46d4bf0a36bcd8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
