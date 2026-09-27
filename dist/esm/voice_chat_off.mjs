export const name="voice_chat_off";
export const id="dl_bd8798240661f5185c26";
export const url=new URL("../icons/voice_chat_off.svg?v=1936db4e55d8a764acd63dfce64ba21f011d0e51aa1d221e880b733b72dab175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
