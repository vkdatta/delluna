export const name="bell-simple-z";
export const id="dl_297eb35a1ea74975bf89";
export const url=new URL("../icons/bell-simple-z.svg?v=f6826666501d63acf081336ead5409bf679d9f3ae4ef82d4c6162c6e2e892c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
