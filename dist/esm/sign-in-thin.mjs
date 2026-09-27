export const name="sign-in-thin";
export const id="dl_5bea78fc591d71aed88c";
export const url=new URL("../icons/sign-in-thin.svg?v=2ef77e711853b629b1b04d96e089d2b1d258c1fdf10be9574a5cc3d2324113b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
