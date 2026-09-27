export const name="binoculars-bold";
export const id="dl_8da6b246fe8d44bda328";
export const url=new URL("../icons/binoculars-bold.svg?v=98d179f641e3a78469fadfb6ed2fb7a4b76c49c583cda3ba465cac86570c33ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
