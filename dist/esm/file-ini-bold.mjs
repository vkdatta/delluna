export const name="file-ini-bold";
export const id="dl_51352d07ac26499188ca";
export const url=new URL("../icons/file-ini-bold.svg?v=50824adb2be2a8055dfa560f7ed688e982ce1169ceef19db8a4310309da6e4be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
