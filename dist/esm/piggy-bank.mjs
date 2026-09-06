export const name="piggy-bank";
export const id="dl_5f409c0a601a4a1c82de";
export const url=new URL("../icons/piggy-bank.svg?v=ffecc04ef732ba0076c16dee46de1a1df09576bf1763a43f209beab519e10ed7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
