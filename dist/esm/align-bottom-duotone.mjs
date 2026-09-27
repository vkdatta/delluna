export const name="align-bottom-duotone";
export const id="dl_1eabd59c57984e31b579";
export const url=new URL("../icons/align-bottom-duotone.svg?v=4ab9086ea722469f30c5c380c7685d2ecb2f7bdafd5b0ba37c5c8d760b2f7179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
