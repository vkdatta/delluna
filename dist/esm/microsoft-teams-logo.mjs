export const name="microsoft-teams-logo";
export const id="dl_e8f7887de6e9411ab75d";
export const url=new URL("../icons/microsoft-teams-logo.svg?v=13d134cf8379569486f9ed133be444faa1e4d9f01b2b68b80cfad43bf757b533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
