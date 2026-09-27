export const name="avocado";
export const id="dl_5877d1724af547c0a908";
export const url=new URL("../icons/avocado.svg?v=dc1329fc0451fd70cc499d95eb02a768e2a14e4b3708888f545442a035f6d471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
