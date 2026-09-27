export const name="castle-turret-thin";
export const id="dl_4c2e757646da410bafba";
export const url=new URL("../icons/castle-turret-thin.svg?v=d6732c50f9acbc3abe30b1b0f18d419094085af7eda887f14b7ed6dedd46bdd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
