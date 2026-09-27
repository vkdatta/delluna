export const name="lucid_2-dumbbell";
export const id="dl_1c8726f7059b43a5bc6b";
export const url=new URL("../icons/lucid_2-dumbbell.svg?v=39786c4d1f7432587437b9927180d7ed7223de42ac353aa39e8d7b64d52a3541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
