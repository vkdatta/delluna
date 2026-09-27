export const name="sports_basketball-fill";
export const id="dl_89d985bd278b97fab24b";
export const url=new URL("../icons/sports_basketball-fill.svg?v=628a03135ad76aaeca550d464cd0a770a771d57607ec7c6735ee950ddc91d6c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
