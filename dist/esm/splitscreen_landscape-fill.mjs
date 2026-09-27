export const name="splitscreen_landscape-fill";
export const id="dl_420b4f09f24d7b2e2d55";
export const url=new URL("../icons/splitscreen_landscape-fill.svg?v=22370a775857b923e490f050cb5e910c2d73892054711a477a58901ed5ed0d48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
