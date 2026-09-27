export const name="codepen-logo-duotone";
export const id="dl_d0bed11583b04a6498a2";
export const url=new URL("../icons/codepen-logo-duotone.svg?v=379608f5aacae8b84b6543c4c4a2f495a24d4b1a357596523e701d53bbd36441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
