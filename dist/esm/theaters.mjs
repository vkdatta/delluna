export const name="theaters";
export const id="dl_f706a98aec7a8882435d";
export const url=new URL("../icons/theaters.svg?v=2d872339075e45204ec5743cd1bc79d841a207854e84393fdf56082262caa95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
