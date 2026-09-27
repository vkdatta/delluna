export const name="google-logo-light";
export const id="dl_c2512e15d9554b45acc0";
export const url=new URL("../icons/google-logo-light.svg?v=6164ca2d1ebd0cbbe67ea1c36b9b8952453032408e75375846d4863352ba94ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
