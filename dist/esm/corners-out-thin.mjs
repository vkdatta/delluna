export const name="corners-out-thin";
export const id="dl_1d0be47708b64782828b";
export const url=new URL("../icons/corners-out-thin.svg?v=68a2d285574fb7435592ea1f28f6deaf2a95178946c95c7387ffa74521ee60d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
