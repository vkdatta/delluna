export const name="bug-droid-bold";
export const id="dl_a031da7c2ffa426c853e";
export const url=new URL("../icons/bug-droid-bold.svg?v=162210eb25fc23897d192b018decdf154932847327904ccaef185fdae9c7643c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
