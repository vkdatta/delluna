export const name="user-check-bold";
export const id="dl_440fcc5e8cb9a0ae5a4e";
export const url=new URL("../icons/user-check-bold.svg?v=ce92991ea4ff0755fb256eb9f6d2ae44ab0834af2e6937030d68f23755b4994b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
