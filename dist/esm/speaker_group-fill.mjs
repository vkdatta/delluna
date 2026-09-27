export const name="speaker_group-fill";
export const id="dl_ff2c438b2abbaf42f335";
export const url=new URL("../icons/speaker_group-fill.svg?v=40afdcf46dd448a8611ecdb3fad5e5712ae4a55847fef915c3665a40e2e5a8cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
