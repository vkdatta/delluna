export const name="push-pin-simple-slash-fill";
export const id="dl_d0a97b93b477427da963";
export const url=new URL("../icons/push-pin-simple-slash-fill.svg?v=a9d3c474187d500d72883996d595e1813c6277bf1dd61066deef63b39fff977c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
