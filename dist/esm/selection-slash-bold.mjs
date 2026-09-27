export const name="selection-slash-bold";
export const id="dl_50b0897ae1acff633f42";
export const url=new URL("../icons/selection-slash-bold.svg?v=90408ddb996b6934a8a361eb201ca54196ff08767912be839a442f1b0df436bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
