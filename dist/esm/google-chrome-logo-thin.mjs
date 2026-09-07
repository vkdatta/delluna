export const name="google-chrome-logo-thin";
export const id="dl_727d8faa70aa45d7aa2d";
export const url=new URL("../icons/google-chrome-logo-thin.svg?v=06ef548cb036ddec1eaa41da745e279019f61033d5595d1418c599ff0c95fb8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
