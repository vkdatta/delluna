export const name="vibrate";
export const id="dl_a3c7b36e7565fc047fa4";
export const url=new URL("../icons/vibrate.svg?v=e4400f329b494ef307d1906b188b58c98acbfb93239b5c40de6da0947b24e83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
