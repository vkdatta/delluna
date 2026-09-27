export const name="barefoot";
export const id="dl_7041c31a692a2a22c376";
export const url=new URL("../icons/barefoot.svg?v=792e353344ffdbc55ec8a1cad654b11aabcfe99c58d6cf8f4867871afe4763cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
