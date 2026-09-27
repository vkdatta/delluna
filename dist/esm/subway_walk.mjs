export const name="subway_walk";
export const id="dl_34184058f76950f016a8";
export const url=new URL("../icons/subway_walk.svg?v=1ed51644e180fb70cb7e8a29ec76a410af3ef72b6b6f8eacbdaad5a7c70006a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
