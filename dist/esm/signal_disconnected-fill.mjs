export const name="signal_disconnected-fill";
export const id="dl_09431250b4b925060ec9";
export const url=new URL("../icons/signal_disconnected-fill.svg?v=fc8b02ec4b0aa661d6a9a081140db763a1388a1725a14a57f6ac3cb6398b663b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
