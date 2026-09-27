export const name="mic_off";
export const id="dl_3ff58ee851752a77ae7a";
export const url=new URL("../icons/mic_off.svg?v=90b855778e2950ef1a55794547dae31ded87c4ec6c00e4a1100a6ca5409dab15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
