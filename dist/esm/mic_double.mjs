export const name="mic_double";
export const id="dl_cbe60b3a2de845d082b8";
export const url=new URL("../icons/mic_double.svg?v=3a286923c686b14a54b7b39c85779eaa95838c0649992c78836756efdb3137b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
