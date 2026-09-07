export const name="drone-thin";
export const id="dl_1d39b50a11754d8a8799";
export const url=new URL("../icons/drone-thin.svg?v=d2885fe57198492e55cd294c2e6f8c1c5a146a08cbba91f40ee3b99b2dabd122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
