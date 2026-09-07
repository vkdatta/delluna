export const name="shield-chevron";
export const id="dl_a33962c14ade4d6cb784";
export const url=new URL("../icons/S/shield-chevron.svg?v=50375eb695e37f0ca8887528cd89438bb67417920f6e8be08582dc601649a5cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
