export const name="fullscreen";
export const id="dl_c936b4b53ad3f62eda19";
export const url=new URL("../icons/fullscreen.svg?v=482e7d2de2767682331403d479f65fc96e490fa98540af757c8251febf5e0b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
