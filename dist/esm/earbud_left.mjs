export const name="earbud_left";
export const id="dl_e4c575dbc16b4a2b9fd5";
export const url=new URL("../icons/E/earbud_left.svg?v=325506aef17182065bc7a76e2766a05f1af01c7bff83f9235350f30560cd5994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
