export const name="hourglass-duotone";
export const id="dl_4cff7c46b85846b4a37d";
export const url=new URL("../icons/hourglass-duotone.svg?v=5efa28f6e5295e0d4ea89bec0c6404306819b342be60823c2b0c5419740cbc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
