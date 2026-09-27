export const name="text-outdent-light";
export const id="dl_296981690c43bcf7c655";
export const url=new URL("../icons/text-outdent-light.svg?v=d4e6b91f7ee6d956b4d7862a016cfc201744bf828c67b4337b588f36ca746afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
