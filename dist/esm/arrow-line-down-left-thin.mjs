export const name="arrow-line-down-left-thin";
export const id="dl_020f0ff7b26f4d2bb4f2";
export const url=new URL("../icons/arrow-line-down-left-thin.svg?v=6829e19d8ce581c47a64a5793d4af7f313190aecafa2929dced1140c0276219d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
