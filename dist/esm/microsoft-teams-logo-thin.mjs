export const name="microsoft-teams-logo-thin";
export const id="dl_065be7538ba943a7b035";
export const url=new URL("../icons/microsoft-teams-logo-thin.svg?v=90c3b628047df26c5d6ee3e331aa1d1a50e46fd225a0ba13e6535646af390931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
