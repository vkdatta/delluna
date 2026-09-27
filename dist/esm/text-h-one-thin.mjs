export const name="text-h-one-thin";
export const id="dl_7bdd50ebc7ee1f5e0601";
export const url=new URL("../icons/text-h-one-thin.svg?v=7c3d9bd519e75fbc14936a5c601e4c4a9175a0066c30e40435099913e10f95ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
