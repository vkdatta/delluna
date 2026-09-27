export const name="collapse_right";
export const id="dl_2674136cc5276cad6e5c";
export const url=new URL("../icons/collapse_right.svg?v=08bbadc350f1e544891be8e5151971aa87ee3baf414c8f3576d6f2724e10c863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
