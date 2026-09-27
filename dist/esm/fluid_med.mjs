export const name="fluid_med";
export const id="dl_029fa3eabcebd47b3129";
export const url=new URL("../icons/fluid_med.svg?v=477312849dca4a37848bf244ad906cded316ad5c7be066efdd0c58e42a9b1d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
