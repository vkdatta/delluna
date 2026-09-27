export const name="microsoft-word-logo-fill";
export const id="dl_c7483667eb4f45c8b7ec";
export const url=new URL("../icons/microsoft-word-logo-fill.svg?v=e706375ca8c42ba789b93b0740ea2365a3ba7da02ebb00f728c872270b4edde9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
