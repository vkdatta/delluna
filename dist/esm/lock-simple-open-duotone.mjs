export const name="lock-simple-open-duotone";
export const id="dl_f15562f2ed3b4cf696dc";
export const url=new URL("../icons/lock-simple-open-duotone.svg?v=6f977c0e93aaaeb3e43286f3f9028051974af9601a23ba4d42d65079de0ad7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
