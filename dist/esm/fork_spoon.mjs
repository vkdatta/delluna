export const name="fork_spoon";
export const id="dl_8fe7d8600df842a3b55e";
export const url=new URL("../icons/F/fork_spoon.svg?v=33a9c6bf77dceb5700abfb214d46765871cce4050606ad2d6b6186878d2b4d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
