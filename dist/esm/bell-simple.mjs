export const name="bell-simple";
export const id="dl_a5eaa88bdeed4cf8b3cd";
export const url=new URL("../icons/bell-simple.svg?v=839ca7c5a2b4627ee090e3507cc7eef5a97a4bd07b2806801a33187865e9b246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
