export const name="unite-square-thin";
export const id="dl_893e0758006e4052926b";
export const url=new URL("../icons/U/unite-square-thin.svg?v=79eef679d300a0a8e066f12e48c5f43460ed210ef46c29e3ffc58531d2787dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
