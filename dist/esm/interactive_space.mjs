export const name="interactive_space";
export const id="dl_4c43f668b65b439cb22a";
export const url=new URL("../icons/I/interactive_space.svg?v=6b290e55e8df9924f38a36cf3380a4a08de7bac628f4e41b0b92c42cd0f5dbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
