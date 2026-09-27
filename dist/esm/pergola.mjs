export const name="pergola";
export const id="dl_5107540d45b6e5ebbe90";
export const url=new URL("../icons/pergola.svg?v=09351d573b4fc134c3fc98444a2a31fa06326ef11323ae25ffe6bf9668372303",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
