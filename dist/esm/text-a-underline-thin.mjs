export const name="text-a-underline-thin";
export const id="dl_5730911c7aadaf312d55";
export const url=new URL("../icons/text-a-underline-thin.svg?v=bc5e2b4a6d41016f2e55f9aae2370ede912b15347961eecc103e4126342d87bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
