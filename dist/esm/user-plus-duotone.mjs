export const name="user-plus-duotone";
export const id="dl_1d270249100f473493e6";
export const url=new URL("../icons/U/user-plus-duotone.svg?v=e08fa7daa45ff8a32b492a7a3fd898a51cd7a0f01177829c94ffd003f9e33cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
