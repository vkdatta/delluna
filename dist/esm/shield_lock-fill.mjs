export const name="shield_lock-fill";
export const id="dl_7b8a8cb9be1b4667afe8";
export const url=new URL("../icons/shield_lock-fill.svg?v=8e4ebe1de423644ad8a089eb8154521fcbac6e13e20d469b5d53ac9bd18cc3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
