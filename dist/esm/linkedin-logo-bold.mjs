export const name="linkedin-logo-bold";
export const id="dl_c335612effc94f76b931";
export const url=new URL("../icons/linkedin-logo-bold.svg?v=2195ad3301df6b970a2c9f9e213286c4ab014252d65bfd7d2fc03d03989b6209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
