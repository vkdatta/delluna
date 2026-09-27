export const name="google-chrome-logo-thin";
export const id="dl_727d8faa70aa45d7aa2d";
export const url=new URL("../icons/google-chrome-logo-thin.svg?v=5bc18828884eba1df203026900530eb5381f8ee5a7415aefdd8e1d573ba714c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
