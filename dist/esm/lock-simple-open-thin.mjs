export const name="lock-simple-open-thin";
export const id="dl_c82cf776950f4952ab99";
export const url=new URL("../icons/lock-simple-open-thin.svg?v=6735d796628dc522478549f6f72db063dc1cde3d09f9e6065baeb1a08608c353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
