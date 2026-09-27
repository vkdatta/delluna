export const name="cat-bold";
export const id="dl_39202a0676624583a084";
export const url=new URL("../icons/cat-bold.svg?v=f0abe96005d590c85bb1fa7481041ab0058dbb28e855b1dd2820deab0def1cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
