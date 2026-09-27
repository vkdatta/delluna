export const name="mic_double";
export const id="dl_df1cd0b2e605a46bf077";
export const url=new URL("../icons/mic_double.svg?v=3a286923c686b14a54b7b39c85779eaa95838c0649992c78836756efdb3137b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
