export const name="number-zero-thin";
export const id="dl_df6bda249bdc4635891a";
export const url=new URL("../icons/number-zero-thin.svg?v=de095b9131e610568fde767b631369190d53064c696655038ab00315fb683943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
