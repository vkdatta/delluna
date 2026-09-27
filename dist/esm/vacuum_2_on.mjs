export const name="vacuum_2_on";
export const id="dl_3483859054a5ed834b30";
export const url=new URL("../icons/vacuum_2_on.svg?v=5b056f4ced4935c3b8e5297517157e046f46eadbfc8a7d48b3c117fe8dac1d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
