export const name="lucid_2-headset";
export const id="dl_a7567e94afbb4daca79b";
export const url=new URL("../icons/lucid_2-headset.svg?v=70363d293521b3ed536c0ed35bd628f2d069613788dbb4fad237c45f7b39dda5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
