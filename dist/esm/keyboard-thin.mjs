export const name="keyboard-thin";
export const id="dl_e9d74cfcf2f042c78db6";
export const url=new URL("../icons/keyboard-thin.svg?v=7b6cfb1c372c16f3c905c28b89c2d5396f62ca5eb348f080974a5eb1ae1ba038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
