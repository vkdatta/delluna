export const name="yoshoku-fill";
export const id="dl_8e1f46292674e2217fce";
export const url=new URL("../icons/yoshoku-fill.svg?v=de8e360e60176192c5a29a8fb531d999eaa4e8f2a320c14a7cae54ccf1ab4eeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
