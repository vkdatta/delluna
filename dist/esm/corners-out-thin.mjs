export const name="corners-out-thin";
export const id="dl_1d0be47708b64782828b";
export const url=new URL("../icons/corners-out-thin.svg?v=921c5ca6ec6a1d69da895d287ea05740a8f67510873ef74d45b6e2949169c6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
