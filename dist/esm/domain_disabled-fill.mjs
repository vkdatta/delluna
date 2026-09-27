export const name="domain_disabled-fill";
export const id="dl_ec975ad8a77882db6b4c";
export const url=new URL("../icons/domain_disabled-fill.svg?v=d91a3bc5a76478bba9c1ee17379f7fcdf0c2d5d05fb53fb4cb0e3b49f17e80ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
