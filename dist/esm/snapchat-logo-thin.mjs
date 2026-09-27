export const name="snapchat-logo-thin";
export const id="dl_26cbadd3bfc467dcdf67";
export const url=new URL("../icons/snapchat-logo-thin.svg?v=a85f5e26f56969102edd0bbc83de41e66c4ec7481ea5ce4ecac6fe2705b90726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
