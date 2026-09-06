export const name="map-pin-line-fill";
export const id="dl_2a567e03f1ef4118a86b";
export const url=new URL("../icons/map-pin-line-fill.svg?v=8b84fd16dcf7243408be651c35705500ce7bf2f1b154c034c7226574012ed943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
