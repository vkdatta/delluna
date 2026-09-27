export const name="file-vue-thin";
export const id="dl_313d2d20414d4d49b59b";
export const url=new URL("../icons/file-vue-thin.svg?v=50ec52ca383309fc39c0f4108fc75b203f70ebac8b8e80c95f7f23b8a6ec782b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
