export const name="unite-light";
export const id="dl_c76bd71f01439d4d2838";
export const url=new URL("../icons/unite-light.svg?v=e5ff25ac832a40837e786179ef1bae6fa73a2d77d0946bd15a4b290b599562db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
