export const name="airplay";
export const id="dl_59ce340af6754e1fb3ab";
export const url=new URL("../icons/airplay.svg?v=9cd8060b54192b12face6e8c3e84da45eab893b731dcdca4e690568753c70478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
