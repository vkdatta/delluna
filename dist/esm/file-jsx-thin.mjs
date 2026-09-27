export const name="file-jsx-thin";
export const id="dl_4a19ddf1fb554a308fee";
export const url=new URL("../icons/file-jsx-thin.svg?v=6353a2c0d18b044127fd4b34f7eaa5e32128ad96032287c1fb9411c592f91612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
