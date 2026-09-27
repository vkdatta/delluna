export const name="plug-charging-thin";
export const id="dl_78bedf6f2f354e229861";
export const url=new URL("../icons/plug-charging-thin.svg?v=207550b8c28c80836a9666f916a025265a3b7087d426056d9fea0deaeefa5831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
