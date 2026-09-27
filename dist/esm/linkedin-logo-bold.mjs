export const name="linkedin-logo-bold";
export const id="dl_c335612effc94f76b931";
export const url=new URL("../icons/linkedin-logo-bold.svg?v=29d9a700ad1cbd072d0ce7921c0936e5a387e31c9779a4d6aac2968315913d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
