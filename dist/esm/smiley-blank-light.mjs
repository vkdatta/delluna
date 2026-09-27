export const name="smiley-blank-light";
export const id="dl_eb16c82d8ab400fb8e69";
export const url=new URL("../icons/smiley-blank-light.svg?v=fd41fb768930aba2de9641f6af724596100cd0025625ad28b95854a5bd9d59fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
