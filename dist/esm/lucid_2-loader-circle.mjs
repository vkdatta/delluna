export const name="lucid_2-loader-circle";
export const id="dl_972179fdbc7e4d5d923b";
export const url=new URL("../icons/lucid_2-loader-circle.svg?v=474a8f657ee395b191e82550202157413b140905c40f2fd0425dc0f26102967d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
