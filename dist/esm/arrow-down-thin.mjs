export const name="arrow-down-thin";
export const id="dl_4b90c5a56ae448089000";
export const url=new URL("../icons/arrow-down-thin.svg?v=d4320ffe0138a1dd39393e386fec74922e2e2f8ec4750c5036a39aa82f86afad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
