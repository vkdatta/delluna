export const name="align-bottom-simple-fill";
export const id="dl_b941c5bef1864f5486db";
export const url=new URL("../icons/align-bottom-simple-fill.svg?v=cfcfc77335db0bb3137ee3bacf8e0ec58836d591e22e380f947f8621ac4e35e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
