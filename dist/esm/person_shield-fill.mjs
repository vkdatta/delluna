export const name="person_shield-fill";
export const id="dl_e4ae37c600b445cfb714";
export const url=new URL("../icons/person_shield-fill.svg?v=fa1fccf6ea6c72af3e54bfeba04be72274f4cec106aebcffcf5e5500c386e1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
