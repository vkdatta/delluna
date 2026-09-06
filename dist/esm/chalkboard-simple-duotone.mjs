export const name="chalkboard-simple-duotone";
export const id="dl_c417314fb02f4da0b7bf";
export const url=new URL("../icons/chalkboard-simple-duotone.svg?v=135fb94faf51e1eb2f754afacb2aa3533408bc732947f6a67493ce9ed08eacc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
