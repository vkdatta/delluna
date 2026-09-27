export const name="dice-four-light";
export const id="dl_ce89acfdde9c4f9891b3";
export const url=new URL("../icons/dice-four-light.svg?v=1e49dd5338936916cb96b2e837e65d0e49afa1ea2a4b7eee48679d91729dd25d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
