export const name="google-chrome-logo-thin";
export const id="dl_727d8faa70aa45d7aa2d";
export const url=new URL("../icons/google-chrome-logo-thin.svg?v=e763ae413d181f8e8b7dc365d5c6573140aba2e0bab066fcb116d623cfbf467e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
