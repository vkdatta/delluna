export const name="boat-bold";
export const id="dl_a3c59d004690494bb991";
export const url=new URL("../icons/boat-bold.svg?v=5964c4ee931d5c060e7e052f3b4ec546dc92ff9b0b7912fbd482b338725626ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
