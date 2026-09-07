export const name="hair-dryer-duotone";
export const id="dl_2ef98bf6266d4202982e";
export const url=new URL("../icons/hair-dryer-duotone.svg?v=fece4bb7d2e0231cecad09428830750480881dbd73d649b45af51fd18ec85214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
