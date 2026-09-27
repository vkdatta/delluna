export const name="loupe";
export const id="dl_225381b3ec50bf00fb8d";
export const url=new URL("../icons/loupe.svg?v=1f305e7dda5647a5acc46b62dba376033b2ef4c4dad0c5d9db68f55aa8cd97e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
