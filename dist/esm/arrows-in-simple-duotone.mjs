export const name="arrows-in-simple-duotone";
export const id="dl_56700416015a41a2a71f";
export const url=new URL("../icons/arrows-in-simple-duotone.svg?v=906f4c6af36438f15013bae6f4379d253322ee78810ec72fd090d9be4bf9e725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
