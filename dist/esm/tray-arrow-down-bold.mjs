export const name="tray-arrow-down-bold";
export const id="dl_ac25450268cc8996251f";
export const url=new URL("../icons/tray-arrow-down-bold.svg?v=5afc96f897dd9f9134cfb4bc133a797cb90f331d7cfcd8629a70b8c1eb02002f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
