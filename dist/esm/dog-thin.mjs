export const name="dog-thin";
export const id="dl_ce0a4ef357234fa89303";
export const url=new URL("../icons/dog-thin.svg?v=6ebf3ef4f0155929e6358675af6a2e9ee9b570ebfae30add7b6352be4aac2931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
