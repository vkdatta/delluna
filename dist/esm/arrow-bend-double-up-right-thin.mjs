export const name="arrow-bend-double-up-right-thin";
export const id="dl_feafcc24bf2b4277a775";
export const url=new URL("../icons/arrow-bend-double-up-right-thin.svg?v=0b9ff89bf11d5677c0dc97ae85a5db336f68ed2e1ba3103ba669eac652cf478f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
