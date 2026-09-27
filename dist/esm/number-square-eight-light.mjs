export const name="number-square-eight-light";
export const id="dl_56197a5b106b41e1a39f";
export const url=new URL("../icons/number-square-eight-light.svg?v=b0bd5b74641edbc30189d194415d4427b695ad58ffd704151d6e996678465ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
