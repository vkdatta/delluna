export const name="square-split-horizontal-thin";
export const id="dl_c34ba9e024784097b5f9";
export const url=new URL("../icons/S/square-split-horizontal-thin.svg?v=ae550f577b7289b2962a4d6089d9ff8e0c6937364e2e7a340364d1b10c2e4852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
