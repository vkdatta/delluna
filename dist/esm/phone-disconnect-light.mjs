export const name="phone-disconnect-light";
export const id="dl_3bdf602e165a4178a43a";
export const url=new URL("../icons/phone-disconnect-light.svg?v=eeb14ac72a6f56323119bf0e6b52b533e4601cd4b5a9296d03860f7cd0f44941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
