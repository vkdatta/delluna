export const name="cylinder";
export const id="dl_b96b90bc90584f22ad4b";
export const url=new URL("../icons/cylinder.svg?v=3ebec96eb861ec6279eb106c6ba19eed641c99c99be8bf804e0f2b0f9a108099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
