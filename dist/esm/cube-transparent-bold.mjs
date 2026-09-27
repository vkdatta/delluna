export const name="cube-transparent-bold";
export const id="dl_6e26f118b04e402aa4c5";
export const url=new URL("../icons/cube-transparent-bold.svg?v=cc24a32d691e1e1838d9305fce01e87aa39f4297f0b329639138044d775d3fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
