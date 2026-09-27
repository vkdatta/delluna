export const name="caret-circle-down-bold";
export const id="dl_15db6b35db134409a1ee";
export const url=new URL("../icons/caret-circle-down-bold.svg?v=08ec75be439d96c100b22da68ad5ec1a53509bd93ff37a6a496e6693e82ede6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
