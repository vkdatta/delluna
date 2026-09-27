export const name="volume-x";
export const id="dl_c19485dd5d204779a8d1";
export const url=new URL("../icons/volume-x.svg?v=d733cc8caed2eb4a1213ca4b60eb127f74baadc42e22daa4a6359ee7f1ee22d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
