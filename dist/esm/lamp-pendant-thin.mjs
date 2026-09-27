export const name="lamp-pendant-thin";
export const id="dl_86839f598b6b4d78a52d";
export const url=new URL("../icons/lamp-pendant-thin.svg?v=aa8b837a991b3b4c92b346109e3073bb277e3b00daa90fdf9daa2f2a76d83626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
