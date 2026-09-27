export const name="magic-wand-fill";
export const id="dl_51be8b5696ed4cc98010";
export const url=new URL("../icons/magic-wand-fill.svg?v=9aa4fddf03f2147595daba3199c30be7b7b59a1bbb268695132a93bd0574dfe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
