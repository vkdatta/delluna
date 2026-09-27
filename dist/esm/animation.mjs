export const name="animation";
export const id="dl_e5f472e32d9df5cc07aa";
export const url=new URL("../icons/animation.svg?v=595669a1e782d232290114edf80f4b71e8f3dbca197339fe826906ea06c5c659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
