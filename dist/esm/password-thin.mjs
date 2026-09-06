export const name="password-thin";
export const id="dl_ef016ff9e47743c39845";
export const url=new URL("../icons/password-thin.svg?v=8a809c48031f3e08e014c5f54ad2477a1b79c4b59275bc38290851eb258fda36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
