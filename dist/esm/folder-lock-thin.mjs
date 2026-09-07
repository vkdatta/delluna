export const name="folder-lock-thin";
export const id="dl_140f8545aa5048c79c8b";
export const url=new URL("../icons/folder-lock-thin.svg?v=1d05282440348e6e08a8b4b35fa28e05309a4292ea8421af8fb74def911dc0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
