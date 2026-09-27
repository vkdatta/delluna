export const name="bathtub-fill";
export const id="dl_e2b23199ccb045ff9fdd";
export const url=new URL("../icons/bathtub-fill.svg?v=08ca5448563d1a37a0f672de1fe24c7d8fa99e65d23ae47f2b0a648175400298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
