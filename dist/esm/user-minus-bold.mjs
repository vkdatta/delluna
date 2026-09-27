export const name="user-minus-bold";
export const id="dl_9e189c631c9db13ab746";
export const url=new URL("../icons/user-minus-bold.svg?v=516cf00038b6e1256cc3f1ee239d660ae632e7c104b1a042bdda595af2bf4bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
