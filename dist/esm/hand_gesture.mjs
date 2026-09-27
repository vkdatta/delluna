export const name="hand_gesture";
export const id="dl_b20368d806a69fa5c13d";
export const url=new URL("../icons/hand_gesture.svg?v=79649e81bb50e63186784ba874b9427edd2035383413397aafa475f87baea9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
