export const name="reset_colors";
export const id="dl_746ead4adb436b8a4abd";
export const url=new URL("../icons/reset_colors.svg?v=c320a3354c3bd542286c1e194dba494816d27fd9017a916227dc41984c268b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
