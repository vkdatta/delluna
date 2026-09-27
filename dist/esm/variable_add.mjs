export const name="variable_add";
export const id="dl_13239a09c27770c468e6";
export const url=new URL("../icons/variable_add.svg?v=36cc14dc07b45f6e259fa4a5f9b0e13c8209f032fdf2d8d1aa90c7dfc10b130b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
