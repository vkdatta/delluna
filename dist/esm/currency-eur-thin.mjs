export const name="currency-eur-thin";
export const id="dl_0f6ebe4062e944c3b232";
export const url=new URL("../icons/currency-eur-thin.svg?v=ceb3d5bc5fb91637f88c299883799a7cfeb8d2fe42aa2181e5469864512ec7ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
