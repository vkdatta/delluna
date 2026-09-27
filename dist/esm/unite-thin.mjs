export const name="unite-thin";
export const id="dl_e7471b74a2a6edcf8b34";
export const url=new URL("../icons/unite-thin.svg?v=2134dcbc4c4d7e26090e3ccee953acc366c99324865f097ccf16428514a31ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
