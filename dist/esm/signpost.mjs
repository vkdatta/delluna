export const name="signpost";
export const id="dl_98a21719de5b42399c8f";
export const url=new URL("../icons/S/signpost.svg?v=f9b4d04cc8d4ff89a83630c8782b625a200762d94ce982da9bb31246d5df32ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
