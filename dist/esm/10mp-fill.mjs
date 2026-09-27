export const name="10mp-fill";
export const id="dl_9138e7dd4baadd96fad7";
export const url=new URL("../icons/10mp-fill.svg?v=c2d88ce8ad137b69cd66cc96f9a9c9ab58148ba4152b16f85e2d273d301f1947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
