export const name="mountains-bold";
export const id="dl_d2c9dee9621249528bab";
export const url=new URL("../icons/mountains-bold.svg?v=6953527db7d0e390a4393e96c63c63dbda3189ea601c048d4b86a64ab1103f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
