export const name="fit_screen";
export const id="dl_8c78afaadca74c349a8f";
export const url=new URL("../icons/F/fit_screen.svg?v=3f541bcc28f9e746545644250fa8be6ea2796495685e010866af70882c8f3afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
