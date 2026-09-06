export const name="prohibit-thin";
export const id="dl_f94e51608065436983e0";
export const url=new URL("../icons/prohibit-thin.svg?v=ac5ff9e34d69c9d0aecb363edc7a47ea7136c82fef8565eb1eba8ef344a292ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
