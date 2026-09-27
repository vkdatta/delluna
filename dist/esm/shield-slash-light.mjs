export const name="shield-slash-light";
export const id="dl_b9fa9606a101acbe9d26";
export const url=new URL("../icons/shield-slash-light.svg?v=aae89550d6b1ff9b14782aae0766bf536cb5b9cf05483ec40abadb5ec3fb220a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
