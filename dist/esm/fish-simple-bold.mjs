export const name="fish-simple-bold";
export const id="dl_91bdd70ee76d42eb80ae";
export const url=new URL("../icons/fish-simple-bold.svg?v=780b9c3cb6f8c0289a1201f5f76d2f0cdb7f3b71cd8db4d0512f888ee2be10d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
