export const name="headset-thin";
export const id="dl_e18a1b26455f49088643";
export const url=new URL("../icons/headset-thin.svg?v=116491fffbfd01bfb327ff8244b67486352b2006b8709171a96e65eefbd0ea41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
