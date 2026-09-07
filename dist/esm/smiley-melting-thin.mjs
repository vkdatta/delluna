export const name="smiley-melting-thin";
export const id="dl_efee5936b8b84972b636";
export const url=new URL("../icons/S/smiley-melting-thin.svg?v=361814221d003a83d8b122ef3b90844b7d09e150e833ebc695d40d9a7106718e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
