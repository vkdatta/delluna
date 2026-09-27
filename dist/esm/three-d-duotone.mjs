export const name="three-d-duotone";
export const id="dl_690de3a5b00825607351";
export const url=new URL("../icons/three-d-duotone.svg?v=484469219829c0513d2825edaf34879de3d9ed5b0763799c757ae08ebd65d139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
