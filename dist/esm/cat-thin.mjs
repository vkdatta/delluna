export const name="cat-thin";
export const id="dl_c20123f428ee4377972c";
export const url=new URL("../icons/cat-thin.svg?v=457fecfc497ad0aaee8c3c419c6271bb4dfda898366bcafe629a11d4b17e9fb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
