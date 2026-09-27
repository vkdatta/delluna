export const name="volume-x";
export const id="dl_c19485dd5d204779a8d1";
export const url=new URL("../icons/volume-x.svg?v=d0eef843e2472dfb8e1dd4e7e3709747eb634720e7b7472812ee17be662f5bfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
