export const name="broom-bold";
export const id="dl_330b1c30e5464c1caeb2";
export const url=new URL("../icons/broom-bold.svg?v=ce778e369ebe26075166be27cef5a0b7b64e9612afc38c50eb65e14827801981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
