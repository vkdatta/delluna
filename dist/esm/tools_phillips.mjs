export const name="tools_phillips";
export const id="dl_d04a73acf8bda7be48eb";
export const url=new URL("../icons/tools_phillips.svg?v=f14f518332496c17df20622a264d82a7515ecc9911ab8ce67f7ddadd9f9bfa57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
