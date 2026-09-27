export const name="boules-duotone";
export const id="dl_0f78a3477ca149dfaad3";
export const url=new URL("../icons/boules-duotone.svg?v=41d3c9a546ce14055b753695551ec876a09b8043513ed684bdc26f809b3291d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
