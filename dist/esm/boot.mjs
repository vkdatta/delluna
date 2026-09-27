export const name="boot";
export const id="dl_342b74de670f4b1b9bec";
export const url=new URL("../icons/boot.svg?v=cb32a6a1fa21fa12cd8d702d961f06e40ca6b9e14273d590944b5e02e1b51077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
