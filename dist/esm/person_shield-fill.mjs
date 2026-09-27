export const name="person_shield-fill";
export const id="dl_74e66aead362053f17b7";
export const url=new URL("../icons/person_shield-fill.svg?v=df7a3a9525eef5ca9724cc67f9cc65c97ef0dbbc76cac199849db32c923ffe37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
