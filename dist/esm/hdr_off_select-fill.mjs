export const name="hdr_off_select-fill";
export const id="dl_a63f8284e7663a5b6f4d";
export const url=new URL("../icons/hdr_off_select-fill.svg?v=07093dd0395c9d303124d77b60c90dbde337b07787cb5c0ce445f7ecf39fca90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
