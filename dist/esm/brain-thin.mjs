export const name="brain-thin";
export const id="dl_ecfb825f0c46462eadf0";
export const url=new URL("../icons/brain-thin.svg?v=cfcc5a884156b3c30686c1ff9ba6947fd7a0d873a9cafb6f2e631f66026c33ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
