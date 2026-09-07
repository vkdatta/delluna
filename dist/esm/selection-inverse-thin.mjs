export const name="selection-inverse-thin";
export const id="dl_cfc79f3336394aae960d";
export const url=new URL("../icons/S/selection-inverse-thin.svg?v=776746eb9745c0f0deab4408b08e63af25563d01d4e54f089fd78138587bdd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
