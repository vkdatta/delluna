export const name="google-cardboard-logo-fill";
export const id="dl_fbfa308a4e044acdb538";
export const url=new URL("../icons/google-cardboard-logo-fill.svg?v=bed16e1e40607ee8b296670db697c50141515d8ec0847fe26421aeaa9d98b364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
