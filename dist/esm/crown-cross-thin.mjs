export const name="crown-cross-thin";
export const id="dl_1f3e743efd9b474f8bec";
export const url=new URL("../icons/crown-cross-thin.svg?v=ab4f696438616e68cb6966ee1e17482e9595fe5aa91efc92d7944e6e710b274c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
